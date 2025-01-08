<template>
  <div>
    <h1>Animals</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Breed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="animal in animals" :key="animal.id">
          <td>{{ animal.id }}</td>
          <td>{{ animal.type.name }}</td>
          <td>{{ animal.breed.breed_name }}</td>
          <td>
            <button @click="deleteAnimal(animal.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
    }
  },
  mounted() {
    this.fetchAnimals();
  }
};
</script>