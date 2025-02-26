// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css'; // Import Tailwind CSS


const app = createApp(App);

// Use the router
app.use(router);

app.mount('#app');
