<template>
  <div class="container">
    <form class="todo-added-form row" @submit.prevent="onSubmit" >
      <div class="mb-3 col-md-12">
        <label for="inputTodoItem" class="form-label">Todo:</label>
        <input type="text" 
          autocomplete="off" 
          class="form-control form-control-lg" 
          id="inputTodoItem" 
          placeholder="To do this" 
          required
          v-model="title" >        
      </div>
      <Button 
        class="btn btn-primary btn-lg col-md-2" 
        type="submit" 
        value="Add" />   
    </form>
  </div>

  <hr/>
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

<style lang="scss" scoped>
  .todo-added-form {
    margin-bottom: 2rem;
  }

  form div {
    padding: 0;
  }
</style>