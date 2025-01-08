<template>
  <nav class="bg-green-600 border-gray-200 px-4 lg:px-6 py-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Farm App</span>
      </router-link>
      <!-- Toggle Button for Mobile -->
      <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg lg:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <!-- Tabs -->
      <div class="hidden lg:flex items-center justify-between w-full lg:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <router-link to="/" class="block py-2 px-4 text-white rounded-lg hover:bg-green-700">Animals</router-link>
          </li>
          <li>
            <router-link to="/tasks" class="block py-2 px-4 text-white rounded-lg hover:bg-green-700">Tasks</router-link>
          </li>
          <li>
            <router-link to="/events" class="block py-2 px-4 text-white rounded-lg hover:bg-green-700">Events</router-link>
          </li>
          <li>
            <router-link to="/profile" class="block py-2 px-4 text-white rounded-lg hover:bg-green-700">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('[data-collapse-toggle]').addEventListener('click', function () {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });
  });
</script>

