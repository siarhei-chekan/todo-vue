<template>
  <form class="todo-edited-form" @submit.prevent="onSubmit" >
    <div class="mb-3">
      <label for="inputTodoTitle" class="form-label">Edit the task title:</label>
      <input type="text" 
        autocomplete="off" 
        class="form-control" 
        id="inputTodoTitle" 
        placeholder="Enter task title"
        v-model="title" >        
    </div>
    <Button 
      class="btn btn-primary" 
      type="submit" 
      value="Done" />
    <Button 
      class="btn btn-secondary" 
      type="button" 
      @click="closeEditedForm" 
      value="Discard" />
  </form>
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
    width: 18rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
  }
</style>