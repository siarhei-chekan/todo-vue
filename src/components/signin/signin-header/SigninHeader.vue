<template>
  <nav class="nav">
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

<style>
  .nav {
    margin-bottom: 5rem;
  }

</style>