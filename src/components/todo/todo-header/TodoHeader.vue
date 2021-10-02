<template>
  <nav class="nav">  
    <router-link to="/auth/signin">
      <Button class="btn btn-outline-primary" type="button" value="Log out" />
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