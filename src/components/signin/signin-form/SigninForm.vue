<template>
  <div class="container">
    <form class="row" @submit.prevent="onLogIn">
      <div class="mb-3 col-md-12">
        <label for="inputLogin" class="form-label">Login:</label>
        <input type="text"
          autocomplete="off"
          class="form-control form-control-lg" 
          id="inputLogin" 
          placeholder="Enter your login"
          required
          v-model="userName">        
      </div>
      <Button class="btn btn-primary btn-lg col-md-2" type="submit" value="Log in" />
    </form>
  </div>

</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  data() {
    return {
      userName: '',
    };
  },

  components: {
    Button
  },

  methods: {
    onLogIn() {
      this.$emit('log-in', this.userName);
    }
  }
}
</script>

<style lang="scss" scoped>
  form div {
    padding: 0;
  }
</style>