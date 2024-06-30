
<template>
    <h1 class="mb-5 text-2xl font-semibold font-serif">Product create</h1>

    <el-form :model="form" label-width="auto" style="max-width: 100%" :rules="rules"  ref="ruleForm" >
      <el-form-item label="Product title" prop="title" >
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Product description" prop="description">
        <el-input v-model="form.description" />
      </el-form-item>

      <el-form-item label="Product price" prop="price">
        <el-input v-model="form.price" />
      </el-form-item>

      <el-form-item label="Product image url" prop="image">
        <el-input v-model="form.image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)">Create</el-button>
        <el-button @click="resetForm(ruleForm)">Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script  setup>
  import { reactive,ref } from 'vue'
  import axios from 'axios';
  import {useRouter} from "vue-router"

  const router = useRouter()

  const ruleForm = ref(null)
  const form = reactive({
    title: '',
    description: '',
    price: '',
    image: '',
  })
  const rules = reactive({
    title:[{ required: true, message: 'Please input title ', trigger: 'change' },],
  description:[ { required: true, message: 'Please input description ', trigger: 'change' },],
  price:[  { required: true, message: 'Please input price ', trigger: 'blur' },],
  image:[  { required: true, message: 'Please input image', trigger: 'blur' },] 
    
  })




  const submitForm = async (formEl) => {
  try {
    if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
  axios.post("https://6681875e04acc3545a06eecd.mockapi.io/products",form )
    router.push('/products');
}
    })
  } catch (err) {
    ElNotification.error("error submit!")
    console.log('errors:', err);
    console.log('error submit!', fields)
  } 

};

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

  </script>
  