<script setup>
import Table from "./components/Table.vue";
</script>

<template>
  <div id="nav">
    <router-link to="/">Table</router-link>
    <router-link to="/post">Post</router-link>
  </div>
  <router-view/>
</template>

<style scoped> 
</style>
