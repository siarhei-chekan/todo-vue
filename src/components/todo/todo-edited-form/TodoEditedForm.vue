<template>
  <div class="container">
    <form class="todo-edited-form row bg-light" @submit.prevent="onSubmit" >
      <div class="mb-3 col-md-12">
        <label for="inputTodoTitle" class="form-label">Edit the task title:</label>
        <input type="text" 
          autocomplete="off" 
          class="form-control form-control-lg" 
          id="inputTodoTitle" 
          placeholder="Enter task title"
          required
          v-model="title" >        
      </div>
      <div class="d-flex flex-column">
        <Button 
          class="btn btn-primary btn-lg col-md-2 mb-3" 
          type="submit" 
          value="Done" />
        <Button 
          class="btn btn-secondary btn-lg col-md-2" 
          type="button" 
          @click="closeEditedForm" 
          value="Discard" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  data() {
    return {
      title: this.editetItem.title,
    }
  },

  props: [
    'editetItem',
  ],

  components: {
    Button,
  },

  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newEditedTodoItem = {
          id: this.editetItem.id,
          title: this.title,
          createdTime: this.editetItem.createdTime,
        };

        this.$emit('edit-todo-item', newEditedTodoItem);
        this.title = '';
      }
    },

    closeEditedForm() {
      this.$emit('close-edited-form');
    }
  }
}
</script>

<style>
  .todo-edited-form {
    /* width: 18rem; */
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
  }
</style>