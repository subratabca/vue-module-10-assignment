<script setup>
import { reactive,  onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const id = route.params.id
const product = reactive({})


onBeforeMount(() => {
axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
          product.id = res.data.id
          product.title = res.data.title
          product.price = res.data.price
          product.description = res.data.description
          product.thumbnail = res.data.thumbnail
        })
      })

</script>
<template>
  <div class="w-full bg-white overflow-hidden shadow-md">
    <img class="w-full h-96" :src="product.thumbnail" alt="Product Image">
    <div class="p-6">
      <h1 class="text-2xl font-semibold text-gray-800 mb-2">{{ product.title }}</h1>
      <p class="text-gray-500"><strong>Price:</strong> ${{ product.price }}</p>
      <p class="text-gray-600"><strong>Description:</strong> {{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
