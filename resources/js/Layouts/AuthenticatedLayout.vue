<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Fixed Sidebar -->
    <Sidebar 
      :user-name="userName" 
      :links="navLinks" 
      :logout="logout" 
      :is-mobile="isMobile" 
      :show-mobile-menu="showMobileMenu" 
      @update:showMobileMenu="showMobileMenu = $event" 
    />

    <!-- Main Content -->
    <main :class="{'ml-4 mt-0': !isMobile || showMobileMenu, 'flex-1 p-4 mt-16': true}" class="flex-1 p-6 transition-all duration-200">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '../Models/Sidebar/Sidebar.vue'; // Adjust the import path as needed
import axios from 'axios';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      userName: '', // Store the user's name
      isMobile: false, // Track if the screen is mobile
      showMobileMenu: false, // Track if the mobile menu is shown
      navLinks: [] // Array to hold navigation links
    };
  },
  created() {
    this.fetchUserData();
    this.checkIfMobile();
    this.navLinks = [
      { text: 'Home', path: '/dashboard', icon: 'ri-home-line' },
      { text: 'Students', path: '/students', icon: 'ri-user-line' },
      // Add more links with icons here
    ];
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
