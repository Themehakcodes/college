<template>
    <div>
      <!-- Header / Navbar -->
      <header class="bg-blue-500 text-white">
        <nav class="container mx-auto flex items-center justify-between p-4">
          <!-- Logo -->
          <div class="text-2xl font-bold">
            <a href="/" class="hover:text-blue-300 transition-colors duration-300">My Website</a>
          </div>
  
          <!-- Navigation Links (hidden on small screens, visible on large screens) -->
          <ul class="hidden md:flex space-x-6">
            <li><a href="/" class="hover:text-blue-300 transition-colors duration-300">Home</a></li>
            <li><a href="/about" class="hover:text-blue-300 transition-colors duration-300">About</a></li>
            <li><a href="/services" class="hover:text-blue-300 transition-colors duration-300">Services</a></li>
            <li><a href="/contact" class="hover:text-blue-300 transition-colors duration-300">Contact</a></li>
          </ul>
  
          <!-- Mobile Menu Button (visible on small screens) -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition-transform duration-300"
                :class="{ 'rotate-90': isMenuOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
  
        <!-- Mobile Menu Dropdown (visible when the button is clicked) -->
        <transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-y-full"
          enter-to-class="translate-y-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-y-0"
          leave-to-class="translate-y-full"
        >
          <div v-if="isMenuOpen" class="md:hidden bg-blue-600 text-white p-4">
            <ul class="space-y-4">
              <li><a href="/" class="block hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="/about" class="block hover:text-blue-300 transition-colors duration-300">About</a></li>
              <li><a href="/services" class="block hover:text-blue-300 transition-colors duration-300">Services</a></li>
              <li><a href="/contact" class="block hover:text-blue-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </transition>
      </header>
  
      <!-- Main content slot where page content will be rendered -->
      <main class="p-4">
        <router-view></router-view>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-200 text-center p-4 mt-8">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        isMenuOpen: false, // State to manage mobile menu visibility
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Toggle the menu on mobile
      },
      closeMenu() {
        this.isMenuOpen = false; // Close the menu
      },
    },
    watch: {
      // Watch for route changes and close the mobile menu
      $route(to, from) {
        this.closeMenu();
      },
    },
  };
  </script>