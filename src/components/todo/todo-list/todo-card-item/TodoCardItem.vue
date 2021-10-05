<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ item.title}}</h5>
        <p class="card-text">The task was created on {{item.createdTime}}</p>
        <button 
            type="button" 
            class="btn btn-secondary"
            @click="$emit('show-edit-form', item)"
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Edit task">
          <i class="bi bi-pen"></i>
        </button>
        <button 
            type="button" 
            class="btn btn-danger" 
            @click="$emit('remove-card', item.id)" 
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Delete task">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 2rem;
  }
</style>