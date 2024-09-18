<template>
  <div class="min-h-screen flex flex-col">
    <!-- Subnav -->
    <div v-if="!isMobile" class="fixed top-0 left-0 w-full z-40 border-b border-gray-300 bg-white">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Subnav :links="subnavLinks" />
      </div>
    </div>

    <!-- Header / Navbar -->
    <header :class="{'top-0': isMobile, 'top-16': !isMobile}" class="fixed left-0 w-full z-50 bg-white">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar :links="navLinks" buttonText="Sign Up" />
      </div>
    </header>

    <!-- Main content slot where page content will be rendered -->
    <main :class="{'pt-16': isMobile, 'pt-24': !isMobile}" class="flex-grow">
      <!-- Adjust pt-16 or pt-24 to push content below the fixed navbar and subnav -->
      <div class="max-w-full mx-auto px-4 mt-40 sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 text-center p-4">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2024 My Website</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '../Models/Navbar/DefaultNavbar.vue'
import Subnav from '../Models/Navbar/SubNav.vue'

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Subnav,
  },
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
      subnavLinks: [
        { text: 'Overview', url: '/overview' },
        { text: 'Details', url: '/details' },
        { text: 'Reports', url: '/reports' },
      ],
      navLinks: [
        { text: 'Home', url: '/', icon: 'ri-home-3-line text-lg' },
        { text: 'About Us', url: '/about' },
        { text: 'Services', url: '/services' },
        { text: 'Contact', url: '/contact' },
      ],
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100%;
}

* {
  box-sizing: inherit;
}

footer {
  width: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.bg-white {
  background-color: white;
}

/* Adjust for mobile screens */
@media (max-width: 768px) {
  .fixed.top-0.left-0.w-full.z-40 {
    display: none;
  }
}
</style>
