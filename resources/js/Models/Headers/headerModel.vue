<template>
    <div class="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
        <h2 class="text-xl font-semibold text-gray-800">{{ headerName }}</h2>
        <button 
            @click="handleButtonAction" 
            class="flex items-center px-4 py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
            <span class="mr-2">
                <component :is="buttonIcon" class="w-5 h-5" />
            </span>
            {{ buttonName }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        headerName: {
            type: String,
            default: 'Students'
        },
        buttonName: {
            type: String,
            default: 'Add New Student'
        },
        buttonIcon: {
            type: String,
            default: 'mdi-plus' // Example default icon (Material Design Icons)
        },
        buttonAction: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        handleButtonAction() {
            this.buttonAction(); // Call the action passed from the parent component
        }
    }
}
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
