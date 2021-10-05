<template>
  <div>
    <div>
      <TodoCardItem 
        v-for="item in todos" :key="item.id"
        v-bind:item="item" 
        @remove-card="removeCard" 
        @show-edit-form="showEditForm" />
    </div>
  </div>
  
</template>

<script>
import TodoCardItem from '@/components/todo/todo-list/todo-card-item/TodoCardItem.vue';

export default {
  props: [
    'todos',
  ],

  components: {
    TodoCardItem
  },

  methods: {
    removeCard(id) {
      this.$emit('remove-card', id);
    },

    showEditForm(item) {
      this.$emit('show-edit-form', item);
    }
  }
}
</script>