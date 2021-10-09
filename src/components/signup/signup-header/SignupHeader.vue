<template>
  <nav class="nav">
    <span class="flex-grow-1 fw-bold align-self-center">Sign up, please!</span>
    <router-link to="/auth/signin">
      <Button class="btn btn-outline-primary btn-lg" type="button" value="Sign in" />
    </router-link>
    <Button class="btn btn-primary btn-lg" type="button" value="Sign up" />
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

      .btn-outline-primary {
        margin-right: 10px;
      }
  }

</style>>
