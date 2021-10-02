<template>
  <form class="todo-added-form" @submit.prevent="onSubmit" >
    <div class="mb-3">
      <label for="inputTodoItem" class="form-label">Todo:</label>
      <input type="text" class="form-control" id="inputTodoItem" placeholder="To do this" 
        v-model="title" >        
    </div>
    <Button class="btn btn-primary" type="submit" value="Add" />   
  </form>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  data() {
    return {
      title: '',
    };
  },

  components: { 
    Button 
  },

  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodoItem = {
          id: new Date().getTime(),
          title: this.title,
          createdTime: new Date().toLocaleString(),
        };

        this.$emit('add-todo-item', newTodoItem);
        this.title = '';
      }
    }
  }

}
</script>

<style>
  .todo-added-form {
    margin-bottom: 2rem;
  }
</style>