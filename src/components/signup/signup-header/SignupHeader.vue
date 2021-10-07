<template>
  <nav class="nav">
    <router-link to="/auth/signin">
      <Button class="btn btn-outline-primary" type="button" value="Sign in" />
    </router-link>
    <Button class="btn btn-primary" type="button" value="Sign up" />
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