

<script  setup>
  import { reactive,ref } from 'vue'
  import axios from 'axios';
  import {useRouter,useRoute} from "vue-router"
  import Loading from "../../components/Loading.vue";
  const router = useRouter()
  const route = useRoute()

  const productID = route.params.id

const loading = ref(false)
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

const fechProducts =async()=>{
  loading.value = true;
await axios.get(`https://6681875e04acc3545a06eecd.mockapi.io/products/${productID}`)
.then(res=>{
  console.log('res',res.data);
  form.value = res.data
    form.title = form.value.title
    form.description = form.value.decription
    form.price = form.value.price
    form.image = form.value.image   
})
.catch(err => console.log('errors:', err))
        .finally(() => {
            loading.value = false;
        });
}
fechProducts()

  const submitForm = async (formEl,id) => {
  try {
    if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
  axios.put(`https://6681875e04acc3545a06eecd.mockapi.io/products/${id}`,{
    title:form.title,
    decription:form.description,
    price :form.price,
    image:form.image
  })
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
  router.push('/products');
}

  </script>
  

<template>
    <h1 class="mb-5 text-2xl font-semibold font-serif">Edit product</h1>
    <Loading v-if="loading"/>
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
        <el-button type="primary" @click="submitForm(ruleForm,productID)">Save</el-button>
        <el-button @click="resetForm(ruleForm)">Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  