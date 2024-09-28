<template>
    <div>
      <!-- Top Navbar for mobile devices with a hamburger menu -->
      <div class="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 text-white bg-gray-800 md:hidden">
        <div class="text-xl font-semibold">Welcome, {{ userName }}</div>
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <!-- Hamburger icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
  
      <!-- Mobile Dropdown Menu -->
      <div v-if="isMobile && showMobileMenu" class="absolute left-0 z-40 w-full bg-gray-800 top-14">
        <nav>
          <ul class="flex flex-col">
            <li v-for="link in links" :key="link.text" class="border-b border-gray-700">
              <router-link 
                :to="link.path"
                class="flex items-center block px-4 py-2 text-white transition-all hover:bg-gray-700">
                <span v-if="link.icon" class="flex-shrink-0 mr-2">
                  <i :class="link.icon" class="w-5 h-5"></i>
                </span>
                <span>{{ link.text }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
  
      <!-- Sidebar for Desktop Devices -->
      <aside 
        class="z-40 hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:w-64 md:bg-gray-800 md:text-white">
        <div class="p-4 text-2xl font-semibold border-b border-gray-700">
          Welcome, {{ userName }}
        </div>
        <nav class="flex-1 overflow-auto">
          <ul>
            <li v-for="link in links" :key="link.text">
              <router-link 
                :to="link.path"
                class="flex items-center block px-4 py-2 space-x-2 transition-all hover:bg-gray-700">
                <span v-if="link.icon" class="flex-shrink-0">
                  <i :class="link.icon" class="w-5 h-5"></i>
                </span>
                <span>{{ link.text }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="p-4 border-t border-gray-700">
          <button @click="logout" class="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </aside>
  
      <!-- Main content area -->
      <!-- Add padding on mobile to avoid overlap with the mobile navbar -->
      <div :class="{'md:ml-64': !isMobile, 'pt-16': isMobile}" class="flex-1 min-h-screen transition-all">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userName: {
        type: String,
        required: true,
      },
      links: {
        type: Array,
        required: true,
        default: () => [
          { text: 'Home', path: '/', icon: 'ri-home-line' },
          { text: 'Profile', path: '/profile', icon: 'ri-user-line' },
        ]
      },
      logout: {
        type: Function,
        required: true,
      },
      isMobile: {
        type: Boolean,
        required: true,
      },
      showMobileMenu: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      toggleMobileMenu() {
        this.$emit('update:showMobileMenu', !this.showMobileMenu);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ensure the mobile dropdown menu behaves well */
  .ml-64 {
    margin-left: 16rem;
  }
  button {
    transition: background-color 0.2s ease;
  }
  </style>
  