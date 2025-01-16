<template>

    <Navbar />
<!--    allow for side bar component -->
    <div class="flex">
      <div class="w-1/6 bg-gray-100">
        <Sidebar />
      </div>
<div class="w-5/6">
<!--    this is where page contents will display-->

        <router-view />


</div>


    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from "@/components/Sidebar.vue";
import Animal from "@/components/Animal.vue";



export default {
  components: {
    Sidebar,
    Navbar,
    Animal
  }
};
</script>