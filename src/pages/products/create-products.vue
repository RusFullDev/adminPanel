
<template>
    <h1 class="mb-5 text-2xl font-semibold font-serif">Product create</h1>

    <el-form :model="form" label-width="auto" style="max-width: 100%">
      <el-form-item label="Product title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Product description">
        <el-input v-model="form.description" />
      </el-form-item>

      <el-form-item label="Product price">
        <el-input v-model="form.price" />
      </el-form-item>

      <el-form-item label="Product image url">
        <el-input v-model="form.imgUrl" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script  setup>
  import { reactive } from 'vue'
  import axios from 'axios';

  
  const form = reactive({
    title: '',
    description: '',
    price: '',
    imgUrl: '',
  })
  
 
  const onSubmit = async () => {
  try {
    const res = await axios.post("https://6681875e04acc3545a06eecd.mockapi.io/products", {
        title: title.value,
        description: description.value,
        price: price.value,
        imgUrl: imgUrl.value
    });
    router.push('/products');
  } catch (err) {
    console.log('errors:', err);
  } 
};

  </script>
  