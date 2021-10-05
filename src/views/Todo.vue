<template>
  <div>
    <TodoHeader />
    <TodoAddedForm 
      @add-todo-item="addTodoItem" 
      v-if="!visibleEditedForm" />
    <TodoList 
      v-bind:todos="todos" 
      @remove-card="removeCard" 
      @show-edit-form="showEditForm" 
      v-if="!visibleEditedForm && todos.length" />
    <p v-else-if="!visibleEditedForm" >You have no current tasks.</p>
    <TodoEditedForm  
      v-if="visibleEditedForm" 
      v-bind:editetItem="editetItem"
      @edit-todo-item="editTodoItem" 
      @close-edited-form="closeEditedForm" /> 
  </div>
</template>

<script>
import TodoList from '@/components/todo/todo-list/TodoList.vue';
import TodoHeader from '@/components/todo/todo-header/TodoHeader.vue';
import TodoAddedForm from '@/components/todo/todo-added-form/TodoAddedForm.vue';
import TodoEditedForm from '@/components/todo/todo-edited-form/TodoEditedForm.vue';


export default {
  data() {
    return {
      todos: [
        {id: 1, title: 'Test 1', createdTime: new Date().toLocaleString()},
        {id: 2, title: 'Test 2', createdTime: new Date().toLocaleString()},
        {id: 3, title: 'Test 3', createdTime: new Date().toLocaleString()}
      ],
      visibleEditedForm: false,
      editetItem: {},
    }
  },

  components: {
    TodoList,
    TodoHeader,
    TodoAddedForm,
    TodoEditedForm
  },

  methods: {
    removeCard(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },

    addTodoItem(newTodoItem) {
      this.todos.push(newTodoItem);
    },

    showEditForm(item) {
      Object.assign(this.editetItem, item);

      this.visibleEditedForm = true;
    },

    editTodoItem(newEditedTodoItem) {
      const targetItem = this.todos.find(item => item.id === newEditedTodoItem.id);
      Object.assign(targetItem, newEditedTodoItem);

      this.visibleEditedForm = false;
    },

    closeEditedForm() {
      this.visibleEditedForm = false;
    }
  }
}
</script>