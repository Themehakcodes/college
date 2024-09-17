// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../Layouts/MainLayout.vue';  // Import the layout
import Home from '../Pages/Homepage.vue';            // Import the Home page

// Define routes
const routes = [
  {
    path: '/',
    component: MainLayout, // Use the layout
    children: [
      {
        path: '',            // Default route for the layout
        name: 'Home',
        component: Home,
      },
    ],
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
