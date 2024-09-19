<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white flex-shrink-0">
        <div class="h-full flex flex-col">
          <div class="p-4 text-2xl font-semibold">
            Welcome, {{ userName }}
          </div>
          <nav class="flex-1">
            <ul>
              <li>
                <router-link 
                  to="/dashboard"
                  class="block py-2 px-4 hover:bg-gray-700">
                  Home
                </router-link>
              </li>
              <!-- Add more sidebar links here -->
            </ul>
          </nav>
          <div class="p-4">
            <button @click="logout" class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 p-6">
        <router-view></router-view> <!-- Renders the child routes -->
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userName: '', // Store the user's name
      };
    },
    created() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          // Fetch user data from an API
          const response = await axios.get('/api/user');
          this.userName = response.data.name;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
      logout() {
        localStorage.removeItem('auth_token'); // Clear auth token
        this.$router.push('/login'); // Redirect to login page
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styles */
  </style>
  