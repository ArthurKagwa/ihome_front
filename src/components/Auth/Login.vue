<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your username"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:outline-none transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
          username: this.username,
          password: this.password,
        });
        const { access, refresh } = response.data;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        this.$router.push("/dashboard"); // Navigate to a dashboard or home page
      } catch (error) {
        this.errorMessage = "Invalid credentials. Please try again.";
      }
    },
  },
};
</script>
