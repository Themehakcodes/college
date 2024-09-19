<template>
    <div class="mb-4">
      <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      type: {
        type: String,
        default: 'text'
      },
      modelValue: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add extra styles if necessary */
  </style>
  