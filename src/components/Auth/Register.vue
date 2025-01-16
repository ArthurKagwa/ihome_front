<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h1>
      <form @submit.prevent="register">
        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-4">
          <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            v-model="confirmPassword"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <!-- Error Message for Password Mismatch -->
        <p v-if="passwordMismatch" class="text-red-500 text-sm mb-4">Passwords do not match.</p>

        <!-- Farm Name -->
        <div class="mb-4">
          <label for="farm_name" class="block text-sm font-medium text-gray-700">Farm Name:</label>
          <input
            type="text"
            id="farm_name"
            v-model="formData.farm_name"
            placeholder="Enter your farm name"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="passwordMismatch"
          class="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:outline-none transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Register
        </button>
      </form>

      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-500 text-sm mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        farm_name: "",
      },
      confirmPassword: "",
      errorMessage: "",
    };
  },
  computed: {
    passwordMismatch() {
      return this.formData.password !== this.confirmPassword;
    },
  },
  methods: {
    async register() {
      if (this.passwordMismatch) {
        this.errorMessage = "Passwords do not match.";
        return;
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/register/",
          this.formData
        );
        console.log("Registration successful:", response.data);
        this.$router.push("/login");
      } catch (error) {
        console.error("Registration failed:", error.response.data);
        this.errorMessage = error.response.data.detail || "Registration failed";
      }
    },
  },
};
</script>

<style>
/* Additional Custom Styles (if needed) */
</style>
