<template>
    <nav
      class="bg-gray-100 border-b border-gray-300 android-hidden"
    >
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4 py-2">
          <template v-for="link in links" :key="link.text">
            <a
              :href="link.url"
              class="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              {{ link.text }}
            </a>
          </template>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Subnav',
    props: {
      links: {
        type: Array,
        default: () => [],
      },
    },
    mounted() {
      // Check if the device is Android
      if (/Android/i.test(navigator.userAgent)) {
        document.querySelector('.android-hidden').style.display = 'none';
      }
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles for the subnav */
  
  /* CSS to hide the nav on smaller screen sizes like mobile (optionally) */
  @media (max-width: 768px) {
    .android-hidden {
      display: none;
    }
  }
  </style>
  