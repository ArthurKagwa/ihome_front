import Vue from 'vue';
import Router from 'vue-router';
import ListAnimals from '../components/ListAnimals.vue';
import AddAnimal from '../components/AddAnimal.vue';
import Tasks from '../components/Tasks.vue';
import Events from '../components/Events.vue';
import Profile from '../components/Profile.vue';


Vue.use(Router);


export default new Router({
  routes: [
    { path: '/', component: ListAnimals },
    { path: '/add', component: AddAnimal },
    { path: '/tasks', component: Tasks},
    { path: '/events', component: Events},
    { path: '/profile', component: Profile},


  ]
});