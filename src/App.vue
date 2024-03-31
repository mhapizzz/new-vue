<script setup>
</script>

<template>
  <div class="bg-peace-grey h-screen w-screen" >
    <div id="nav" style="position: absolute;">
      <router-link to="/">Table</router-link>
      <router-link to="/post">Post</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped> 
</style>
