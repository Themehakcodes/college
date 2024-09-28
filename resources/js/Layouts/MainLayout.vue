<template>
  <div class="fixed flex flex-col w-full min-h-screen">
    <!-- Subnav -->
    <div v-if="!isMobile" class="fixed top-0 left-0 z-40 w-full bg-white border-b border-gray-300">
      <div class="max-w-full mx-auto">
        <Subnav :links="subnavLinks" />
      </div>
    </div>

    <!-- Header / Navbar -->
    <header :class="{'top-0': isMobile, 'top-16': !isMobile}" class="fixed left-0 z-50 w-full bg-white">
      <div class="max-w-full px-4 mx-auto ">
        <div class="flex items-center justify-between">
          <Navbar :links="[
      { text: 'Home', url: '/', icon: 'ri-home-3-line text-lg' },
      { text: 'About Us', url: '/about' },
      { text: 'Services', url: '/services' },
      { text: 'Contact', url: '/contact' },
      { text: 'Login', url: '/login' },
    ]" />
        </div>
      </div>
      
      <!-- Mobile Menu Dropdown -->
      <div v-if="isMenuOpen" class="text-white bg-gray-800 md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="link in navLinks" :key="link.text">
            <a
              :href="link.url"
              class="block px-3 py-2 text-base font-medium transition duration-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              <i v-if="link.icon" :class="link.icon"></i> {{ link.text }}
            </a>
          </template>
        </div>
      </div>
    </header>

    <!-- Main content slot where page content will be rendered -->
    <main :class="{'pt-16': isMobile, 'pt-24': !isMobile}" class="flex-grow">
      <div class="max-w-full px-4 mx-auto mt-4 sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="p-4 text-center bg-gray-200">
      <div class="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        <p>© 2024 My Website</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '../Models/Navbar/DefaultNavbar.vue';
import Subnav from '../Models/Navbar/SubNav.vue';

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
</style>
