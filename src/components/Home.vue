<script setup></script>

<template>
  <div class="h-screen" style="display: flex; justify-content: center; align-items: center; ">
    <div class="circle"></div>
    <div class="header" style="">
      <div style="display: flex; justify-content: center;">
        <img src="./../assets/peace.png" alt="" style="width: 12rem;">
      </div>
      <h1 class="text-white text-3xl font-bold" style="margin: 2rem;">We Make Your Ideas Comes To Life</h1>
      <div class="buttons" style="display: flex; justify-content: center; gap: 1.5rem;">
        <router-link to="/contact-us" class="py-2 px-8 rounded-md font-bold bg-peace-yellow">Contact Us</router-link>
        <router-link to="/latest-work" class="py-2 px-8 rounded-md font-bold border border-peace-yellow text-white">Latest Work</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  height: 20rem;
  width: 20rem;
  border: 1px solid #DCA41C;
  border-radius: 50%;
  position: absolute;
  right: -6rem;
  top: -4rem;
}
</style>
