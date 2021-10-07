<template>
  <div>
    <TodoHeader :current-user="currentUser" @log-out="onLogOut" />
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
    if(localStorage.getItem(this.currentUser + 'Todos')) {
      return {
        todos: JSON.parse(localStorage.getItem(this.currentUser + 'Todos')),
        visibleEditedForm: false,
        editetItem: {},
      }
    } else {
      return {
        todos: [],
        visibleEditedForm: false,
        editetItem: {},
      }
    }    
  },

  props: [
    'currentUser',
  ],

  components: {
    TodoList,
    TodoHeader,
    TodoAddedForm,
    TodoEditedForm
  },

  methods: {
    removeCard(id) {
      this.todos = this.todos.filter(item => item.id !== id);
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos));
    },

    addTodoItem(newTodoItem) {
      this.todos.push(newTodoItem);
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos));
    },

    showEditForm(item) {
      Object.assign(this.editetItem, item);

      this.visibleEditedForm = true;
    },

    editTodoItem(newEditedTodoItem) {
      const targetItem = this.todos.find(item => item.id === newEditedTodoItem.id);
      Object.assign(targetItem, newEditedTodoItem);
      this.visibleEditedForm = false;
      
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos));
    },

    closeEditedForm() {
      this.visibleEditedForm = false;
    },

    onLogOut() {
      this.$emit('log-out');
    }
  }
}
</script>