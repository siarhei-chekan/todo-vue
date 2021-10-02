<template>
  <div class="todo-added-form">
    <form>
      <div class="mb-3">
        <label for="inputTodoItem" class="form-label">Todo:</label>
        <input type="text" class="form-control" id="inputTodoItem" placeholder="To do this">        
      </div>
      <Button class="btn btn-primary" type="button" value="Add" />   
    </form>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  components: { 
    Button 
  },

}
</script>

<style>
  .todo-added-form {
    margin-bottom: 2rem;
  }
</style>