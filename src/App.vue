<template>
  <div id="app">
    <Navbar />
    <ListAnimals />
  </div>
</template>

<script>
import ListAnimals from './components/ListAnimals.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    ListAnimals,
    Navbar
  }
};
</script>