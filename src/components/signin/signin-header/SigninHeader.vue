<template>
  <nav class="nav">
    <p >Log in, please</p>
    <Button class="btn btn-primary" type="button" value="Sign in" />
    <router-link to="/auth/signup">
      <Button class="btn btn-outline-primary" type="button" value="Sign up" />
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

<style scoped>
  .nav {
    margin-bottom: 2rem;
  }

</style>