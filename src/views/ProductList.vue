<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue';
const products = ref([])
let isLoading = ref(true)

onBeforeMount(() => {
    axios.get('https://dummyjson.com/products')
        .then(res => {
          products.value = res.data.products
          isLoading.value = false
        })
  })


</script>

<template>
<div class="grid grid-cols-3 gap-4">
    <div class="text-2xl font-bold text-indigo-700" v-if="isLoading">Loading...</div>
    <ProductCard v-else class="w-full p-4" v-for="data in products" :key="data.id" :data="data"></ProductCard>
</div>
</template>

<style scoped>

</style>