<script setup>
import { ref } from "vue";

const isExpanded = ref(false);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
  console.log(isExpanded.value);
};
</script>

<template>
  <div
    id="nav"
    class="absolute bg-yellow-300 top-0 left-0 h-screen w-96"
    :class="`${isExpanded ? 'expanded' : 'not-expanded'}`"
  >
    <div class="h-100 w-100 bg-slate-400 mt-48 flex flex-col">
      <div
        class="bg-green-400 h-8 w-8 flex justify-center items-center cursor-pointer"
        @click="toggleMenu"
      >
        <span class="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </div>
    </div>

    <div class="h-100 w-100 bg-slate-400 mt-48 flex flex-col">
      <router-link class="bg-red-300 py-4 px-8 border border-gray-700" to="/"
        >Table</router-link
      >
      <router-link
        class="bg-red-300 py-4 px-8 border border-gray-700"
        to="/post"
        >Post</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
