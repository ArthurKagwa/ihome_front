import Vue from 'vue';
import Router from 'vue-router';
import ListAnimals from '../components/ListAnimals.vue';
import AddAnimal from '../components/AddAnimal.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: ListAnimals },
    { path: '/add', component: AddAnimal }
  ]
});