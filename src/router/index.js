import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/views/Todo.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/todo'
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/todo',
    name: 'Todo',    
    meta: {
      auth: true,
    },
    component: Todo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogIn'));  
  const requireAuth = to.matched.some(routsRecord => routsRecord.meta.auth);

  if(requireAuth && !isLogin) {
    next('/auth/signin');
  } else {
    next();
  }

});

export default router;