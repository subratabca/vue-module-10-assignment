<script setup>
  import {  RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath"  />
  </div>
</template>

<style scoped>

</style>