<template>
  <div>
    <router-view @log-in="onLogIn" 
      @log-out="onLogOut"
      :current-user="currentUser" />
  </div>  
</template>

<script>
export default {
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')),
    }
  },
  methods: {
    onLogIn(userName) {
      this.currentUser = userName.trim();
      
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      localStorage.setItem('isLogIn', 'true');

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

<style lang="scss">

</style>
