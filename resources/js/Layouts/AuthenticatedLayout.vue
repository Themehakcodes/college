<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside :class="{'block': !isMobile || showMobileMenu, 'hidden': isMobile && !showMobileMenu}" class="w-64 fixed bg-gray-800 text-white flex-shrink-0 md:flex md:flex-col md:h-screen">
      <div class="flex flex-col h-full">
        <div class="p-4 text-2xl font-semibold border-b border-gray-700">
          Welcome, {{ userName }}
        </div>
        <nav class="flex-1">
          <ul>
            <li>
              <router-link to="/dashboard" class="block py-2 px-4 hover:bg-gray-700">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/students/add-new" class="block py-2 px-4 hover:bg-gray-700">
                Add New Student
              </router-link>
            </li>
            <!-- Add more sidebar links here -->
          </ul>
        </nav>
        <div class="p-4 border-t border-gray-700">
          <button @click="logout" class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </aside>

    <!-- Mobile Sidebar -->
    <aside v-if="isMobile && showMobileMenu" class="fixed inset-0 bg-gray-800 text-white z-20 md:hidden">
      <div class="flex flex-col h-full p-4">
        <div class="text-2xl font-semibold mb-4 border-b border-gray-700">
          Welcome, {{ userName }}
        </div>
        <nav class="flex-1">
          <ul>
            <li>
              <router-link to="/dashboard" class="block py-2 px-4 hover:bg-gray-700">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/students/add-new" class="block py-2 px-4 hover:bg-gray-700">
                Add New Student
              </router-link>
            </li>
            <!-- Add more sidebar links here -->
          </ul>
        </nav>
        <div class="mt-4 border-t border-gray-700">
          <button @click="logout" class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main :class="{'ml-64': !isMobile && !showMobileMenu, 'flex-1 p-4': isMobile}" class="flex-1 p-6">
      <router-view></router-view> <!-- Renders the child routes -->
    </main>

    <!-- Top Navbar for Mobile Devices -->
    <header class="bg-gray-800 text-white p-4 md:hidden flex items-center justify-between fixed w-full top-0 left-0 z-10">
      <button @click="toggleMobileMenu" class="text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div class="text-xl font-semibold">Welcome, {{ userName }}</div>
    </header>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userName: '', // Store the user's name
      isMobile: false, // Track if the screen is mobile
      showMobileMenu: false // Track if the mobile menu is shown
    };
  },
  created() {
    this.fetchUserData();
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
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
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
    }
  }
};
</script>

<style scoped>
/* Optional: Add custom styles */
@media (max-width: 768px) {
  main {
    margin-left: 0; /* No margin needed on mobile */
  }
}
</style>
