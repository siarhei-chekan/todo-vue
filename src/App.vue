<template>
  <div class="app container" >
    <router-view @log-in="onLogIn" 
      @log-out="onLogOut"
      @show-toast="showToast"
      :current-user="currentUser" />
    <Toast :title="title" :msg="msg" />
  </div>  
</template>

<script>
import Toast from "@/components/toast/Toast.vue";

export default {
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')),
      title: '',
      msg: '',
    }
  },

  components: {
    Toast,
  },

  methods: {
    showToast() {
      const toastHTMLEl = document.querySelector('.toast');
      const toast = new bootstrap.Toast(toastHTMLEl);

      toast.show();
    },

    onLogIn(userName) {
      this.currentUser = userName.trim();
      
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      localStorage.setItem('isLogIn', 'true');

      this.title = this.currentUser;
      this.msg = 'You are successfully logged in!';

      this.showToast();

      this.$router.push('/todo');
    },

    onLogOut() {
      localStorage.setItem('isLogIn', 'false');
      localStorage.setItem('currentUser', JSON.stringify(null));

      this.$router.push('/auth/signin');
    }
  }
}
</script>

<style lang="scss" scoped>
  .app {
    font-size: 20px;
  }
</style>
