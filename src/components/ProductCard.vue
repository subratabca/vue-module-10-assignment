<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  data: Array
})
</script>
<template>
  <div class="bg-white rounded-lg shadow-lg">
    <RouterLink :to="{name:'ProductDetails',params:{id:data.id}}">
      <img :src="data.thumbnail" alt="Image 1" class="w-full h-40 object-cover rounded-t-lg" />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ data.title }}</h3>
        <p class="text-gray-500">${{ data.price }}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">View Details</button>
      </div>
  </RouterLink>
  </div>
</template>

<style scoped></style>
