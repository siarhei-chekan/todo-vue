<template>
  <div>
    <ul>
      <TodoListItem 
        v-for="item in todos" :key="item.id"
        v-bind:item="item" />
    </ul>
  </div>
  
</template>

<script>
import TodoListItem from '@/components/todo/todo-list/todo-list-item/TodoListItem.vue';

export default {
  props: [
    'todos',
  ],
  components: {
    TodoListItem
  }  
}
</script>

<style scoped>
  ul {
    list-style: none;
  }

</style>

