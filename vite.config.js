import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // Tailwind CSS file
                'resources/js/app.js',   // Vue JS entry point
            ],
            refresh: true, // Hot reload enabled
        }),
        vue(),
    ],
});
