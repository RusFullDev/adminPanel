<script setup>
import { useRoute,useRouter } from 'vue-router';
import { ref } from 'vue';
import api from "../../api";
import Loading from "../../components/Loading.vue";

const router = useRouter()
const route = useRoute();
const userId = route.params.id;
const user = ref({});
const loading = ref(false);

const surname = ref('');
const name = ref('');
const age = ref('');
const phone = ref('');

const fechData = async (id) => {
    loading.value = true;
    await api.get(`users/${id}`)
        .then(res => {
            user.value = res.data;
            surname.value = user.value.firstName;
            name.value = user.value.lastName;
            age.value = user.value.age;
            phone.value = user.value.phone;
        })
        .catch(err => console.log('errors:', err))
        .finally(() => {
            loading.value = false;
        });

};
fechData(userId);

const editUser = async (id) => {
    loading.value = true;
    await api.put(`users/${id}`, {
        firstName: surname.value,
        lastName: name.value,
        age: age.value,
        phone: phone.value
    })
        .then(res => user.value = res.data)
        .catch(err => console.log('errors:', err))
        .finally(() => {
            loading.value = false;
        });

// router.push('/users')
};

</script>

<template>
  <div>
    <Loading v-if="loading" />
    <h2 class="text-lg font-medium font-serif text-center mb-5">Edit User</h2>
    <div class="flex gap-10 justify-evenly mb-4">
      <p class="text-lg font-medium font-serif">User Id: {{ userId }}</p>
      <p class="text-lg font-medium font-serif">First Name: {{ user.firstName }}</p>
      <p class="text-lg font-medium font-serif">Last Name: {{ user.lastName }}</p>
      <p class="text-lg font-medium font-serif">Age: {{ user.age }}</p>
      <p class="text-lg font-medium font-serif">Phone number: {{ user.phone }}</p>
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
      <button @click="editUser(userId)" class="px-7 py-2 text-xl text-white bg-cyan-500 rounded-md hover:bg-cyan-600">Save</button>
    </div>
  </div>
</template>

<style  scoped>
</style>
