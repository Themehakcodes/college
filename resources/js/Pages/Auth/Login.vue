<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form @submit.prevent="handleLogin">
            <InputField id="email" label="Email" v-model="form.email" type="email" />
            <InputField id="password" label="Password" v-model="form.password" type="password" />
  
            <div class="mt-6">
              <SubmitButton label="Login" />
            </div>
  
            <div v-if="error" class="mt-4 text-red-500 text-sm">
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InputField from '../../Models/Inputs/InputField.vue';
  import SubmitButton from '../../Models/Buttons/SubmitButton.vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    components: {
      InputField,
      SubmitButton,
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        error: ''  // Add an error field to show login errors
      };
    },
    methods: {
      async handleLogin() {
        try {
          // CSRF Token for security (useful if you're not using Inertia or SPA)
          const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          
          // Make an API call to login
          const response = await axios.post('/api/login', this.form, {
            headers: {
              'X-CSRF-TOKEN': csrfToken,
            },
          });
  
          // Save the authentication token or user data to local storage
          localStorage.setItem('auth_token', response.data.token); // Adjust based on your API response
  
          // Redirect to the intended path or default to home
          const redirectPath = this.$route.query.redirect || '/dashboard';
          this.$router.push(redirectPath);
        } catch (error) {
          console.error('Login failed:', error);
          this.error = 'Login failed. Please check your credentials and try again.';
          
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add extra styles if necessary */
  </style>
  