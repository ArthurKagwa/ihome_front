<template>
  <div>
    <h1 class="green ">Animals</h1>
    <table class="min-w-full border-collapse border border-gray-300 shadow-md rounded-md">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">ID</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Type</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Breed</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Sex</th>
          <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="animal in animals"
          :key="animal?.id"
          class="hover:bg-gray-50 even:bg-gray-50"
        >
          <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal?.id }}</td>
          <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal?.type?.name || 'Unknown' }}</td>
          <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal?.breed?.breed_name || 'Unknown' }}</td>
          <td class="px-4 py-2 text-sm text-gray-800 border-b">{{ animal?.sex || 'Unknown' }}</td>
          <td class="px-4 py-2 text-sm text-gray-800 border-b">
            <button
              @click="deleteAnimal(animal?.id)"
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
  <!-- form to add animal -->
  <div class="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h2 class="text-lg font-bold text-gray-800 mb-4">Add New Animal</h2>

    <form>
      <!-- Animal ID -->
      <div class="mb-4">
        <label for="animalId" class="block text-sm font-medium text-gray-700">Animal ID</label>
        <input
          type="number"
          id="animalId"
          v-model="newAnimal.id"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>

      <!-- Type Selection -->
      <div class="mb-4">
        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
        <select
          id="type"
          v-model="selectedType"
          @change="handleTypeChange"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select a type</option>
          <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
        </select>
      </div>

      <!-- Breed Selection -->
      <div class="mb-4">
        <label for="breed" class="block text-sm font-medium text-gray-700">Breed</label>
        <select
          id="breed"
          v-model="newAnimal.breed"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select a breed</option>
          <option v-for="breed in breeds" :key="breed.id" :value="breed.id">{{ breed.breed_name }}</option>
        </select>
      </div>

      <!-- Sex Selection -->
      <div class="mb-4">
        <label for="sex" class="block text-sm font-medium text-gray-700">Sex</label>
        <select
          id="sex"
          v-model="newAnimal.sex"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select a sex</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>

      <!-- Father Selection -->
      <div class="mb-4">
        <label for="father" class="block text-sm font-medium text-gray-700">Father</label>
        <select
          id="father"
          v-model="newAnimal.father"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select a father</option>
          <option v-for="father in fathers" :key="father.id" :value="father.id">{{ father.name }}</option>
        </select>
      </div>

      <!-- Mother Selection -->
      <div class="mb-4">
        <label for="mother" class="block text-sm font-medium text-gray-700">Mother</label>
        <select
          id="mother"
          v-model="newAnimal.mother"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select a mother</option>
          <option v-for="mother in mothers" :key="mother.id" :value="mother.id">{{ mother.name }}</option>
        </select>
      </div>

      <!-- Submit Button -->
      <div class="mt-6">
        <button
          @click.prevent="addAnimal"
          class="w-full bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition focus:ring-2 focus:ring-green-400 focus:outline-none"
        >
          Add Animal
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animals: [],
      types: [],
      breeds: [],
      selectedType: '',
      newAnimal: {
        id: '',
        type: '',
        breed: '',
        sex: '',
        father: '',
        mother: ''
      }
    };
  },

  computed: {
    fathers() {
      return this.animals.filter(animal => animal.type === this.selectedType && animal.sex === 'M');
    },
    mothers() {
      return this.animals.filter(animal => animal.type === this.selectedType && animal.sex === 'F');
    }
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
    fetchTypes() {
      const baseURL = 'http://127.0.0.1:8000/api/types/';
      axios
        .get(baseURL)
        .then(response => {
          this.types = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchBreeds() {
      const baseURL = 'http://127.0.0.1:8000/api/breeds/';
      axios
        .get(baseURL)
        .then(response => {
          this.breeds = response.data.filter(breed => breed.type === this.selectedType);
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleTypeChange() {
      this.newAnimal.type = this.selectedType;
      this.newAnimal.breed = '';
      this.newAnimal.sex = '';
      this.newAnimal.father = '';
      this.newAnimal.mother = '';
      this.fetchBreeds();
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
      const baseURL = 'http://127.0.0.1:8000/api/animals/';
      const type = this.types.find(type => type.id === this.selectedType);
      const animalId = `${type.name.charAt(0)}${this.newAnimal.id}`;
      const animalData = { ...this.newAnimal, id: animalId };

      axios
        .post(baseURL, animalData)
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
    this.fetchTypes();
  }
};
</script>