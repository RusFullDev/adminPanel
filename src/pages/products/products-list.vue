<script setup>
import ETable from "../../components/ETableProducts.vue"
import{useRouter} from "vue-router"

const router = useRouter()

</script>

<template>
    <div class="container">
        <div class="flex justify-between mb-5 ">
            <h1 class="text-center text-2xl font-semibold font-serif">Products list</h1>
            <el-button type="primary" plain @click="router.push('/create-products')">Create product</el-button>
        </div>
<ETable />
    </div>
</template>



<style lang="scss" scoped>

</style>