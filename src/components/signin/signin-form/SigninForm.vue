<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="inputLogin" class="form-label">Login:</label>
        <input type="text" class="form-control" id="inputLogin" placeholder="Enter your login">        
      </div>
      <router-link to="/todo">
        <Button class="btn btn-primary" type="button" value="Log in" />
      </router-link>      
    </form>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<style>

</style>