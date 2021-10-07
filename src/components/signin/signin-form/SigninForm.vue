<template>  
  <form @submit.prevent="onLogIn">
    <div class="mb-3">
      <label for="inputLogin" class="form-label">Login:</label>
      <input type="text"
        autocomplete="off"
        class="form-control" 
        id="inputLogin" 
        placeholder="Enter your login"
        required
        v-model="userName">        
    </div>
    <Button class="btn btn-primary" type="submit" value="Log in" />
  </form>
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