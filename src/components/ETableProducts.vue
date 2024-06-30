<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter()

const users = ref([]);
const loading = ref(false);
const totalUsers = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);


const handleCurrentChange = (page) => {
  currentPage.value = page;
  fetchProducts();
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  fetchProducts();
};

const indexMethod = (index) => {
  return (currentPage.value - 1) * pageSize.value + index + 1;
};

const fetchProducts = () => {
  loading.value = true;
  axios.get("https://6681875e04acc3545a06eecd.mockapi.io/products", {
    params: {
      limit: pageSize.value,
      page: currentPage.value 
    },
  })
    .then(res => {
      users.value = res.data
      totalUsers.value = res.data.total;
    })
    .catch(err => console.log('errors:', err))
    .finally(() => {
      loading.value = false;
    });
};

fetchProducts();

const confirmEvent = async (id) => {
  try {
    loading.value = true;
  const res = await axios.delete(`https://6681875e04acc3545a06eecd.mockapi.io/products/${id}`)
if(res.status == 200){
  ElNotification.success("Data o'chirildi")
  fetchProducts()
}else{
  ElNotification.error("Data o'chirilishida xatolik")
  fetchProducts()
}  
  } catch (error) {
    console.log('error',error);
  }
  
};

const cancelEvent = () => {
  ElNotification.success("Bekor qilindi")
};

const handleEdite = (id) => {
  router.push({name:"edit-user",params:{id}})
};

import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'

</script>

<template>
  <el-table v-loading="loading" :data="users" style="width: 100%">
    <el-table-column type="index" :index="indexMethod" />
    <!-- <el-table-column prop="id" label="id" /> -->
    <el-table-column prop="title" label="Title" />
    <el-table-column prop="decription" label="Decription" />
    <el-table-column prop="price" label="Price" />
    <!-- <el-table-column prop="image" label="Image" /> -->
    <el-table-column fixed="right" label="Operations">

      <template #default="{ row }" >
        <el-button type="primary" :icon="Edit" circle/>
        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          icon-color="#626AEF"
          title="Are you sure to delete this?"
          @confirm="confirmEvent(row.id)"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button type="danger" :icon="Delete"  circle/>
          </template>
        </el-popconfirm>
        <!-- <el-button link  type="primary" size="small" @click="handleEdite(row.id)">Edit</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  <div class="flex justify-end py-5">
    <el-pagination
      v-model="currentPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="total, sizes, prev, pager, next"
      :total="totalUsers"
    />
  </div>
</template>
