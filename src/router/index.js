// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Animal from '../components/Animal.vue';
import AddAnimal from '../components/AddAnimal.vue';
import Tasks from '../components/Tasks.vue';
import Events from '../components/Events.vue';
import Profile from '../components/Profile.vue';
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";

// Define the routes
const routes = [
  { path: '/', component: Animal },
  { path: '/add', component: AddAnimal },
  { path: '/tasks', component: Tasks },
  { path: '/events', component: Events },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/animals', component: Animal },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),  // Use Web History for the router
  routes,  // Use the defined routes
});

export default router;
