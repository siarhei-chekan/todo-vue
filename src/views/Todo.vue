<template>
  <div>
    <TodoHeader />
    <TodoAddedForm />
    <TodoList v-bind:todos="todos" />
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
        {id: 1, title: 'Test 1', createdTime: new Date()},
        {id: 2, title: 'Test 2', createdTime: new Date()},
        {id: 3, title: 'Test 3', createdTime: new Date()}
      ],
    }
  },

  components: {
    TodoList,
    TodoHeader,
    TodoAddedForm
  }
}
</script>