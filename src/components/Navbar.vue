
<script setup>
import {useStore} from "../store"
const store = useStore()

</script>

<template>
   <el-header class=" flex items-center">
      <el-header class="flex items-center text-2xl gap-9">
   <h1 class="text-white ">Teacher</h1>
   <button @click="store.isCollapse = !store.isCollapse"> 
<el-icon >
   <Fold/>
    </el-icon>
  </button>
      </el-header>
    <div class=" body-font text-white  ">
  <div class="pl-[250px] mx-auto flex flex-wrap gap-20 p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-5 text-xl text-white">Tailblocks</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-yellow-300">First Link</a>
      <a class="mr-5 hover:text-yellow-300">Second Link</a>
      <a class="mr-5 hover:text-yellow-300">Third Link</a>
      <a class="mr-5 hover:text-yellow-300">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>

   </el-header>
  </template>
  



<style lang="scss" scoped>

</style>