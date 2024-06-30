<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import {useStore} from "../store"
const store = useStore()
</script>
<template>
<div class="common-layout">
      <el-header class="!fixed  left-0 top-0 w-full z-20  bg-[#1b3852] text-white">
        <Navbar/>
      </el-header>
      <div>
          <Sidebar/>
        <el-main>
          <div  class="pt-20 w-full duration-300 pr-5" :class="store.isCollapse ? 'pl-[84px]' : 'pl-[200px]' ">
            <RouterView />
          </div>
        </el-main>
      </div>
  </div>


</template>

    


<style lang="scss" scoped></style>
