<script setup>
import { useRouter } from 'vue-router';
import { ref,watch } from 'vue';
import api from "../../api";
import Loading from "../../components/Loading.vue";

const router = useRouter();
const user = ref({});
const loading = ref(false);

const surname = ref('');
const name = ref('');
const age = ref('');
const phone = ref('');

// watch(surname,(firstName)=>{
//   console.log(firstName);
// })

const addUser = async () => {
  loading.value = true;
  try {
    const res = await api.post(`/users/`, {
      firstName: surname.value,
      lastName: name.value,
      age: age.value,
      phone: phone.value
    });
    user.value = res.data;
    router.push('/users');
  } catch (err) {
    console.log('errors:', err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <Loading v-if="loading" />
    <h2 class="text-lg font-medium font-serif text-center mb-5">Create User</h2>
    <div class="flex gap-10 justify-evenly mb-4">
      <p class="text-lg font-medium font-serif">First Name: {{surname}}</p>
      <p class="text-lg font-medium font-serif">Last Name: {{name}}</p>
      <p class="text-lg font-medium font-serif">Age: {{age}}</p>
      <p class="text-lg font-medium font-serif">Phone number: {{phone}}</p>
    </div>
    <form class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p class="mb-1 text-lg font-medium font-serif">First Name</p>
        <input v-model="surname" type="text" required class="px-4 w-full max-w-auto py-2 border border-cyan-500 rounded-md outline-none">
      </div>
      <div>
        <p class="mb-1 text-lg font-medium font-serif">Last Name</p>
        <input v-model="name" type="text" required class="px-4 w-full max-w-auto py-2 border border-cyan-500 rounded-md outline-none">
      </div>
      <div>
        <p class="mb-1 text-lg font-medium font-serif">Age</p>
        <input v-model="age" type="text" required class="px-4 w-full max-w-auto py-2 border border-cyan-500 rounded-md outline-none">
      </div>
      <div>
        <p class="mb-1 text-lg font-medium font-serif">Phone number</p>
        <input v-model="phone" type="text" required class="px-4 w-full max-w-auto py-2 border border-cyan-500 rounded-md outline-none">
      </div>
    </form>
    <div class="flex justify-end">
      <button @click="addUser" class="px-7 py-2 text-xl text-white bg-cyan-500 rounded-md hover:bg-cyan-600">Save</button>
    </div>
  </div>
</template>

<style scoped>
</style>
