import { createWebHistory, createRouter } from 'vue-router'



const routes = [
    {
        path:'/',
        component:()=>import('../layouts/admin.vue'),
        children:[
            {
                path:'',
                name:'dashboard',
                component:()=>import('../pages/Dashboard.vue')
            },
            {
                path:'users',
                name:'users',
                component:()=>import('../pages/users/user-list.vue')
            },
            {
                path:'create-user',
                name:'create-user',
                component:()=>import('../pages/users/create-users.vue')
            },
            {
                path:'edit-user/:id',
                name:'edit-user',
                component:()=>import('../pages/users/edit-user.vue')
            },
            {
                path:'products',
                name:'products',
                component:()=>import('../pages/products/products-list.vue')
            },
            {
                path:'create-products',
                name:'create-products',
                component:()=>import('../pages/products/create-products.vue')
            },
            {
                path:'edit-products/:id',
                name:'edit-products',
                component:()=>import('../pages/products/edit-products.vue')
            },
         
        ]  
    },
    {
        path:'/error',
        name:'error',
        component:()=>import('../pages/Error.vue')
    },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

