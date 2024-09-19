<template>
  <nav class="w-full z-40 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-start justify-between p-2 md:flex-row md:items-center">
        <!-- Mobile: Logo and Hamburger in a single container -->
        <div class="flex items-center justify-between w-full md:hidden">
          <!-- Logo -->
          <a href="/" class="text-2xl font-bold text-red flex items-center">
            <img src="https://gcabohar.com/images/minini_99.png" alt="Logo" class="logo-img" />
          </a>

          <!-- Hamburger Icon (Visible on Mobile only) -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 focus:outline-none md:hidden">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Desktop Logo and Menu -->
        <div class="flex flex-col w-full hidden md:flex">
          <!-- Desktop Logo -->
          <div class="flex-shrink-0">
            <slot name="logo">
              <a href="/" class="text-2xl font-bold text-red flex items-center">
                <img src="https://gcabohar.com/images/minini_99.png" alt="Logo" class="logo-img" />
              </a>
            </slot>
          </div>

          <!-- Desktop Links & Search Box -->
          <div class="flex justify-between w-full items-center">
            <div class="md:flex gap-2 justify-between bg-white ml-6 mt-2 w-full z-50 items-center">
              <div class="links md:flex gap-4">
                <template v-for="link in links" :key="link.text">
                  <a :href="link.url"
                    class="nav-link text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition duration-300 ease-in-out relative">
                    <i v-if="link.icon" :class="link.icon" class="inline-block align-middle"></i>
                    <span class="align-middle">{{ link.text }}</span>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
                  </a>
                </template>
              </div>

           

              <!-- Injected Button from Parent -->
              <div v-if="button" class="ml-4">
                <slot name="button">
                  <button :class="button.class" @click="button.action">
                    {{ button.text }}
                  </button>
                </slot>
              </div>


                  <!-- Search Box -->
              <div class="relative text-gray-300 hidden md:block mr-4">
                <input v-model="searchQuery" type="text"
                  class="bg-transparent border-2 border-blue-700 text-black rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition border-1 duration-300 ease-in-out"
                  placeholder="Search..." />
                <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-black focus:outline-none">
                  <i class="ri-search-line text-lg"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen"
      class="md:hidden bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out transform">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="link in links" :key="link.text">
          <a :href="link.url"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition duration-300 ease-in-out">
            <i v-if="link.icon" :class="link.icon" class="inline-block align-middle"></i>
            <span class="align-middle">{{ link.text }}</span>
          </a>
        </template>
      </div>

      <!-- Mobile Search Box -->
      <div class="relative text-gray-300 px-4 py-2">
        <input v-model="searchQuery" type="text"
          class="bg-transparent border-2 border-blue-700 text-white rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition border-1 duration-300 ease-in-out"
          placeholder="Search..." />
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white focus:outline-none">
          <i class="ri-search-line text-lg"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      default: () => [
        { text: "Home", url: "/", icon: "ri-home-line" },
        { text: "About Us", url: "/about" },
        { text: "Services", url: "/services" },
        { text: "Contact", url: "/contact" },
      ],
    },
    button: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      searchQuery: "",
      mobileMenuOpen: false,
    };
  },
};
</script>

<style scoped>
/* Underline effect on hover for links */
.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: blue;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Button hover effect */
button:hover {
  transform: scale(1.05);
}

/* Logo styling for desktop and mobile */
.logo-img {
  height: auto;
  width: auto;
}

/* Adjust logo size for mobile */
@media (max-width: 768px) {
  .logo-img {
    max-height: 40px; /* Mobile size */
    max-width: 120px;
  }
}

/* Hide mobile menu in desktop */
@media (min-width: 768px) {
  .nav-link {
    display: block;
  }
}
</style>
