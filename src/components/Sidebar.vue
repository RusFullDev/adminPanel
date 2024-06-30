<script  setup>

import {useStore} from "../store"
const store = useStore()

  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  


  </script>


<template>
    <div class="">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo !fixed !h-screen border-t !bg-[#2085dd] top-[60px] " 
      :collapse="store.isCollapse" text-color="#303133" router="true"
    >
    <el-menu-item index="/" class="!text-yellow-400 !text-base font-serif" >
        <el-icon><document /></el-icon>
        <template #title>Dashboard</template>
      </el-menu-item>

    <el-menu-item index="/users" class="!text-yellow-400 !textbase font-serif">
        <el-icon><icon-menu /></el-icon>
        <template #title>Users</template>
      </el-menu-item>

      <el-menu-item index="/products" class="!text-yellow-400 !textbase font-serif">
        <el-icon><icon-menu /></el-icon>
        <template #title>Products</template>
      </el-menu-item>
     
       
      <el-menu-item index="/error" class="!text-yellow-400 !text-base font-serif">
        <el-icon><setting /></el-icon>
        <template #title >Navigator One</template>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon class="!text-yellow-400 !text-lg"><location /></el-icon>
          <span class="!text-yellow-400 !text-base">Navigator Two</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu >
     
    </el-menu>
</div>
  </template>
  
  
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>
  