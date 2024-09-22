<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for an account</h2>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form @submit.prevent="handleRegister">
            <!-- Input fields -->
            <InputField id="name" label="Name" v-model="form.name" type="text" />
            <InputField id="email" label="Email" v-model="form.email" type="email" />
            <InputField id="password" label="Password" v-model="form.password" type="password" />
            <InputField id="password_confirmation" label="Confirm Password" v-model="form.password_confirmation" type="password" />
  
            <!-- Submit button -->
            <SubmitButton label="Register" />
          </form>
          <!-- Error message -->
          <p v-if="error" class="mt-4 text-red-600">{{ error }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InputField from '@/Models/Inputs/InputField.vue';
  import SubmitButton from '@/Models/Buttons/SubmitButton.vue';
  import axios from 'axios';
  
  export default {
    components: {
      InputField,
      SubmitButton
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        error: null
      };
    },
    methods: {
      async handleRegister() {
        try {
          const response = await axios.post('/api/register', this.form);
          const { token, user } = response.data;
  
          // Store the token (e.g., in local storage)
          localStorage.setItem('token', token);
  
          // Redirect or perform other actions on successful registration
          this.$router.push({ name: 'Home' });
        } catch (error) {
          console.error('Registration failed:', error);
          // Set error message for user feedback
          this.error = error.response?.data?.message || 'Registration failed. Please try again.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add extra styles */
  </style>
  