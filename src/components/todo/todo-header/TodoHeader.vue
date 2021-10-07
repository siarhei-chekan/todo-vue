<template>
  <nav class="nav">
    <p >Hello, {{currentUser}}!</p>
    <Button @click="onLogOut" 
      class="btn btn-outline-primary" 
      type="button" 
      value="Log out" />
  </nav>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  props: [
    'currentUser',
  ],

  components: {
    Button,
  },

  methods: {
    onLogOut() {
      this.$emit('log-out');
    }
  }
}
</script>

<style scoped>
  .nav {
    margin-bottom: 2rem;
  }

</style>