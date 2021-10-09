<template>
  <div class="container">
    <form class="row" @submit.prevent>
      <div class="mb-3 col-md-12">
        <label for="inputLogin" class="form-label">Login:</label>
        <input type="text" 
          class="form-control form-control-lg" 
          id="inputLogin" 
          placeholder="Enter your login" 
          required>        
      </div>
      <Button class="btn btn-primary btn-lg col-md-2" type="submit" value="Sign up" />
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

<style lang="scss" scoped>
  form div {
    padding: 0;
  }

</style>