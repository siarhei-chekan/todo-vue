<template>
  <nav class="nav">
    <span class="flex-grow-1 fw-bold align-self-center">Hello, {{currentUser}}!</span>
    <Button @click="onLogOut" 
      class="btn btn-outline-primary btn-lg" 
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

<style lang="scss" scoped>
  .nav {
    margin-bottom: 2rem;
    margin-top: 2rem;
    justify-content: end;
  }

</style>