<script setup>
import { ref } from 'vue';
import api from '../api';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter()

const users = ref([]);
const loading = ref(false);
const totalUsers = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);


const handleCurrentChange = (page) => {
  currentPage.value = page;
  fetchUsers();
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  fetchUsers();
};

const indexMethod = (index) => {
  return (currentPage.value - 1) * pageSize.value + index + 1;
};

const fetchUsers = () => {
  loading.value = true;
  api.get('/users', {
    params: {
      limit: pageSize.value,
      skip: (currentPage.value - 1) * pageSize.value,
    },
  })
    .then(res => {
      users.value = res.data.users;
      totalUsers.value = res.data.total;
    })
    .catch(err => console.log('errors:', err))
    .finally(() => {
      loading.value = false;
    });
};

fetchUsers();

const confirmEvent = async (id) => {
  loading.value = true;
  const res = await api.delete(`/users/${id}`)
    // .then(() => {
    //   fetchUsers(); 
    //   console.log('confirm!');
    // })
    // .catch(err => console.log('errors:', err))
    // .finally(() => {
    //   loading.value = false;
    // });
if(res.status == 200){
  ElNotification.success("Data o'chirildi")
  fetchUsers()
}else{
  ElNotification.error("Data o'chirilishida xatolik")
  fetchUsers()
}  
};

const cancelEvent = () => {
  ElNotification.success("Bekor qilindi")
};

const handleEdite = (id) => {
  router.push({name:"edit-user",params:{id}})
};

</script>

<template>
  <el-table v-loading="loading" :data="users" style="width: 100%">
    <el-table-column type="index" :index="indexMethod" />
    <el-table-column prop="firstName" label="First Name" />
    <el-table-column prop="lastName" label="Last Name" />
    <el-table-column prop="age" label="Age" />
    <el-table-column prop="phone" label="Phone" />
    <el-table-column prop="address.city" label="City" />
    <el-table-column prop="address.address" label="Address" />
    <el-table-column fixed="right" label="Operations">
      <template #default="{ row }" >
        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          icon-color="#626AEF"
          title="Are you sure to delete this?"
          @confirm="confirmEvent(row.id)"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button type="danger">Delete</el-button>
          </template>
        </el-popconfirm>
        <el-button link  type="primary" size="small" @click="handleEdite(row.id)">Edit</el-button>
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
