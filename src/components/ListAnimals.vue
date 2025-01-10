<template>
  <div>
    <h1 class="green ">Animals</h1>
   <table class="min-w-full border-collapse border border-gray-300 shadow-md rounded-md">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">ID</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Type</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Breed</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
        </tr>
      </thead>
  <tbody>
    <tr
      v-for="animal in animals"
      :key="animal.id"
      class="hover:bg-gray-50 even:bg-gray-50"
    >
      <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal.id }}</td>
      <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal.type?.name || 'Unknown' }}</td>
      <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal.breed?.breed_name || 'Unknown' }}</td>
      <td class="px-4 py-2 text-sm text-gray-800 border-b">
        <button
          @click="deleteAnimal(animal.id)"
          class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          aria-label="Delete animal"
        >
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

  </div>
<!--  form to add animal-->
  <div class="mt-4">
    <h2 class="text-lg font-semibold">Add Animal</h2>
    <form class="flex space x-4" @submit.prevent="addAnimal">
      <input
        type="text"
        v-model="newAnimal.type"
        placeholder="Type"
        class="px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        v-model="newAnimal.breed"
        placeholder="Breed"
        class="px-3 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        class="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animals: []

    };

  },

  methods: {
    fetchAnimals() {
      const baseURL = 'http://127.0.0.1:8000/api/animals/';
      axios
        .get(baseURL)
        .then(response => {
          this.animals = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteAnimal(id) {
      const baseURL = 'http://127.0.0.1:8000/api/animals/';
      axios
        .delete(`${baseURL}${id}/`)
        .then(() => {
          this.fetchAnimals(); // Refresh list
        })
        .catch(error => {
          console.error(error);
        });
    },
    addAnimal() {
      const baseURL = 'http://127.0.0.1:800/api/animals/';
      axios
        .post(baseURL, this.newAnimal)
        .then(() => {
          this.fetchAnimals(); // Refresh list
          this.newAnimal = {}; // Clear form
        })
        .catch(error => {
          console.error(error);
        });
    }

  },
  mounted() {
    this.fetchAnimals();
  }
};


</script>