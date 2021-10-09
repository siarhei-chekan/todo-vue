<template>
  <nav class="nav">
    <span class="flex-grow-1 fw-bold align-self-center">Log in, please!</span>
    <Button 
      class="btn btn-primary btn-lg" 
      type="button" 
      value="Sign in" />
    <router-link to="/auth/signup">
      <Button 
        class="btn btn-outline-primary btn-lg" 
        type="button" 
        value="Sign up" />
    </router-link>    
  </nav>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  components: {
    Button,
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    margin-bottom: 2rem;
    margin-top: 2rem;
    justify-content: end;

      .btn-primary {
        margin-right: 10px;
      }
  }

</style>