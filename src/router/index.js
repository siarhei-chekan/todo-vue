import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/views/Todo.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';

const routes = [
  {
    path: '/',
    redirect: '/auth/signin'
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
