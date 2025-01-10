<template>

    <Navbar />
<!--    allow for side bar component -->
    <div class="flex">
      <div class="w-1/6 bg-gray-100">
        <Sidebar />
      </div>
      <div class="w-5/6">
        <ListAnimals />
      </div>
    </div>
</template>

<script>
import ListAnimals from './components/ListAnimals.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
    ListAnimals,
    Navbar
  }
};
</script>