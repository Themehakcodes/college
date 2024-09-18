<template>
  <nav class="fixed w-full z-50 bg-white shadow-sm android-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-start justify-between p-2 md:flex-row md:items-center"
      >
        <div class="flex flex-col items-left w-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <slot name="logo">
              <a href="/" class="text-2xl font-bold text-red">
                <img src="https://gcabohar.com/images/minini_99.png" />
              </a>
            </slot>
          </div>

          <!-- Links -->
          <div class="md:flex justify-between ml-6 mt-2  w-full">
          <div class="links md:flex gap-4">
            <template v-for="link in links" :key="link.text">
              <a
                :href="link.url"
                class="nav-link text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition duration-300 ease-in-out relative"
              >
                <i v-if="link.icon" :class="link.icon"></i>
                <span>{{ link.text }}</span>
                <span
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"
                ></span>
              </a>
            </template>
          </div>

            <!-- Search Box -->
            <div class="relative text-gray-300 hidden md:block mr-4">
              <input
                v-model="searchQuery"
                type="text"
                class="bg-transparent border-2 border-blue-700 text-black rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition border-1 duration-300 ease-in-out"
                placeholder="Search..."
              />
              <button
                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-black focus:outline-none"
              >
                <i class="ri-search-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <!-- Mobile Menu Button -->
          <div class="-mr-2 flex md:hidden ml-4">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              type="button"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105"
              aria-expanded="false"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out transform"
      :class="{ 'translate-y-0': mobileMenuOpen, '-translate-y-full': !mobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="link in links" :key="link.text">
          <a
            :href="link.url"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition duration-300 ease-in-out"
          >
            <i v-if="link.icon" :class="link.icon"></i>
            <span>{{ link.text }}</span>
          </a>
        </template>
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
        // Example structure for each link object
        // { text: 'Home', url: '/', icon: 'ri-home-line' }
      ],
    },
    buttonText: {
      type: String,
      default: "Get Started",
    },
  },
  data() {
    return {
      searchQuery: "",
      mobileMenuOpen: false,
    };
  },
  mounted() {
    // Check if the device is Android
    if (/Android/i.test(navigator.userAgent)) {
      document.querySelector('.android-hidden').style.display = 'none';
    }
  },
  methods: {
    onButtonClick() {
      alert("Button Clicked!");
    },
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

/* Hide the nav for Android devices */
.android-hidden {
  display: block;
}

/* Hide nav on smaller screens (optionally) */
@media (max-width: 768px) {
  .android-hidden {
    display: none;
  }
}
</style>
