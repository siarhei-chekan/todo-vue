<template>
  <div>
    <div>
      <TodoCardItem 
        v-for="item in todos" :key="item.id"
        v-bind:item="item" 
        @remove-card="removeCard" />
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
    }
  }
}
</script>

<style scoped>

</style>

