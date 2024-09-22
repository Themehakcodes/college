import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../Layouts/MainLayout.vue';  // Layout for public routes
import Home from '../Pages/Homepage.vue';            // Home page
import Login from '@/Pages/Auth/Login.vue';          // Login page
import Register from '@/Pages/Auth/Register.vue';    // Register page
import Dashboard from '@/Pages/Dashboard.vue';        // Dashboard page
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'; // Authenticated layout
import AddNewStudent from '@/Pages/Students/AddNewStudent.vue'; // Add New Student page

// Define public routes
const publicRoutes = [
  {
    path: '/',
    component: MainLayout, // Main layout for public routes
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, // No layout for login page
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, // No layout for register page
  },
];

// Define authenticated routes
const authRoutes = [
  {
    path: '/dashboard',
    component: AuthenticatedLayout, // Layout for authenticated routes
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }, // Requires authentication
      },
      {
        path: '/students/add-new', // Nested path (no leading slash)
        name: 'AddNewStudent',
        component: AddNewStudent,
        meta: { requiresAuth: true }, // Requires authentication
      },
    ],
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [...publicRoutes, ...authRoutes], // Combine public and authenticated routes
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('auth_token'); // Check if the user is authenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard'); // Redirect authenticated users away from the login page
  } else {
    next(); // Proceed to the route
  }
});

export default router;
