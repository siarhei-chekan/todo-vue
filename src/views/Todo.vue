<template>
  <div>
    <TodoHeader />
    <TodoAddedForm @add-todo-item="addTodoItem" />
    <TodoList 
      v-bind:todos="todos" 
      @remove-card="removeCard" />
  </div>
</template>

<script>
import TodoList from '@/components/todo/todo-list/TodoList.vue';
import TodoHeader from '@/components/todo/todo-header/TodoHeader.vue';
import TodoAddedForm from '@/components/todo/todo-added-form/TodoAddedForm.vue';

export default {
  data() {
    return {
      todos: [
        {id: 1, title: 'Test 1', createdTime: new Date().toLocaleString()},
        {id: 2, title: 'Test 2', createdTime: new Date().toLocaleString()},
        {id: 3, title: 'Test 3', createdTime: new Date().toLocaleString()}
      ],
    }
  },

  components: {
    TodoList,
    TodoHeader,
    TodoAddedForm
  },

  methods: {
    removeCard(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },

    addTodoItem(todo) {
      this.todos.push(todo);
    }
  }
}
</script>