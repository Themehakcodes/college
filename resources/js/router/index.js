import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../Layouts/MainLayout.vue';  // Import the layout for public routes
import Home from '../Pages/Homepage.vue';            // Import the Home page
import Login from '@/Pages/Auth/Login.vue';          // Import the Login page
import Register from '@/Pages/Auth/Register.vue';    // Import the Register page
import Dashboard from '@/Pages/Dashboard.vue';        // Import the Dashboard page
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'; // Import authenticated layout
import Students from '@/Pages/Students/Students.vue';
import AddNewStudent from '@/Pages/Students/AddNewStudent.vue';

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
        path:'/students',
        name:'students',
        component:Students,
      meta:{requiresAuth:true},
      },
      {
        path:'/students/add-new', // Nested path (no leading slash)
        name:'AddNewStudent',
        component:AddNewStudent,
        meta:{requiresAuth:true},
      }
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
