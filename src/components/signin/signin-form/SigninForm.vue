<template>  
  <form @submit.prevent>
    <div class="mb-3">
      <label for="inputLogin" class="form-label">Login:</label>
      <input type="text"
        autocomplete="off"
        class="form-control" 
        id="inputLogin" 
        placeholder="Enter your login">        
    </div>
    <router-link to="/todo">
      <Button class="btn btn-primary" type="submit" value="Log in" />
    </router-link>      
  </form>
</template>

<script>
import Button from '@/components/button/Button.vue'

export default {
  components: {
    Button
  }
}
</script>