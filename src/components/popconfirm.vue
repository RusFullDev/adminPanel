<script setup >
import { InfoFilled } from '@element-plus/icons-vue'
import api from "../api"
import { ref } from 'vue';

const users = ref([])

const confirmEvent = async(id) => {
 const dataUsers = await api.delete(`/users,{params:{id:${id}}}`)
 users.value = dataUsers
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}
</script>


<template>
    <el-popconfirm
      confirm-button-text="Yes"
      cancel-button-text="No"
      :icon="InfoFilled"
      icon-color="#626AEF"
      title="Are you sure to delete this?"
      @confirm="confirmEvent"
      @cancel="cancelEvent"
    >
      <template #reference>
        <el-button>Delete</el-button>
      </template>
    </el-popconfirm>
  </template>
  




<style scoped>

</style>