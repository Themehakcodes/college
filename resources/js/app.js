// resources/js/app.js
import '../css/app.css';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import 'remixicon/fonts/remixicon.css';

createApp(App)
  .use(router)  // Use the router
  .mount('#app');  // Mount Vue on the #app div
