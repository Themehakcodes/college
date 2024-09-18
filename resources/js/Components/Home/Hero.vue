<template>
    <div class="relative bg-blue-800 text-white overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?college,education"
          alt="College Campus"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Welcome to <span class="text-yellow-300">[Your College Name]</span>
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-8">
          Empowering Future Leaders with Excellence in Education and Innovation
        </p>
        <div class="flex justify-center gap-x-6">
          <a
            href="#admissions"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            Apply Now
          </a>
          <a
            href="#about"
            class="bg-transparent border-2 border-white hover:border-yellow-300 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  }
  </script>
  
  <style scoped>
  /* Additional styling for the hero section if needed */
  </style>
  