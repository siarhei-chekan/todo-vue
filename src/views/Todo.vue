<template>
  <div class="todo">
    <TodoHeader :current-user="currentUser" @log-out="onLogOut" />
    <TodoAddedForm 
      @add-todo-item="addTodoItem" 
      v-if="!visibleEditedForm" />
    <TodoList 
      v-bind:todos="todos" 
      @remove-card="removeCard" 
      @show-edit-form="showEditForm" 
      v-if="!visibleEditedForm && todos.length" />
    <p class="noTasksMsg" v-else-if="!visibleEditedForm" >You have no current tasks.</p>
    <TodoEditedForm  
      v-if="visibleEditedForm" 
      v-bind:editetItem="editetItem"
      @edit-todo-item="editTodoItem" 
      @close-edited-form="closeEditedForm" />
    <Toast :msg="msg" :title="title" />
  </div>
</template>

<script>
import TodoList from '@/components/todo/todo-list/TodoList.vue';
import TodoHeader from '@/components/todo/todo-header/TodoHeader.vue';
import TodoAddedForm from '@/components/todo/todo-added-form/TodoAddedForm.vue';
import TodoEditedForm from '@/components/todo/todo-edited-form/TodoEditedForm.vue';
import Toast from '@/components/toast/Toast.vue';

export default {
  data() {
    if(localStorage.getItem(this.currentUser + 'Todos')) {
      return {
        todos: JSON.parse(localStorage.getItem(this.currentUser + 'Todos')),
        visibleEditedForm: false,
        editetItem: {},
        msg: '',
        title: '',
      }
    } else {
      return {
        todos: [],
        visibleEditedForm: false,
        editetItem: {},
        msg: '',
        title: '',
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
    TodoEditedForm,
    Toast,
  },

  methods: {
    showToast() {
      const toastHTMLEl = document.querySelector('.toast');
      const toast = new bootstrap.Toast(toastHTMLEl);

      toast.show();
    },

    removeCard(id) {
      const removedTask = this.todos.find(item => item.id === id);
      this.title = removedTask.title;

      this.todos = this.todos.filter(item => item.id !== id);
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos)); 

      this.msg = 'The task was deleted!';      

      this.showToast();
    },

    addTodoItem(newTodoItem) {
      this.todos.push(newTodoItem);
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos));

      this.title = newTodoItem.title;
      this.msg = 'The task was added!';      

      this.showToast();
    },

    showEditForm(item) {
      Object.assign(this.editetItem, item);

      this.visibleEditedForm = true;
    },

    editTodoItem(newEditedTodoItem) {
      this.title = newEditedTodoItem.title;
      const targetItem = this.todos.find(item => item.id === newEditedTodoItem.id);
      Object.assign(targetItem, newEditedTodoItem);
      this.visibleEditedForm = false;
      
      localStorage.setItem(this.currentUser + 'Todos', JSON.stringify(this.todos));

      this.msg = 'The task was updated!';      

      this.showToast();
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

<style lang="scss" scoped>
  .noTasksMsg {
    font-size: 2rem;
    text-align: center;
  }
</style>