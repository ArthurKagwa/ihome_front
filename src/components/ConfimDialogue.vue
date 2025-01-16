<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-lg font-bold mb-4">{{ message }}</h2>
      <div class="flex justify-end">
        <button @click="confirm" class="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Yes</button>
        <button @click="cancel" class="bg-red-500 text-white px-4 py-2 rounded-md">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Are you sure?'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>