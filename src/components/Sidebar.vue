<template>
  <div>
    <div class="hidden sm:block w-64 h-screen bg-green-100 shadow-md">
    <ul class="space-y-2 mt-6">
      <li>
        <router-link
          to="/"
          class="block py-3 px-6 text-green-800 font-medium rounded-lg hover:bg-green-200 hover:text-green-900 transition"
        >
          Animals
        </router-link>
      </li>
      <li>
        <router-link
          to="/tasks"
          class="block py-3 px-6 text-green-800 font-medium rounded-lg hover:bg-green-200 hover:text-green-900 transition"
        >
          Tasks
        </router-link>
      </li>
      <li>
        <router-link
          to="/events"
          class="block py-3 px-6 text-green-800 font-medium rounded-lg hover:bg-green-200 hover:text-green-900 transition"
        >
          Events
        </router-link>
      </li>
      <li>
        <router-link
          to="/profile"
          class="block py-3 px-6 text-green-800 font-medium rounded-lg hover:bg-green-200 hover:text-green-900 transition"
        >
          Profile
        </router-link>
      </li>
    </ul>
  </div>
</div>

</template>