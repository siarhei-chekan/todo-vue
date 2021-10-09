<template>
  <div class="col-md-6">
    <div class="card text-center bg-light" >
      <div class="card-body">
        <h2 class="card-title">{{ item.title}}</h2>
        <p class="card-text">The task was created on {{item.createdTime}}</p>
        <div class="d-flex justify-content-evenly">
          <button 
              type="button" 
              class="btn btn-secondary btn-lg"
              @click="$emit('show-edit-form', item)"
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Edit task">
            <i class="bi bi-pen"></i>
          </button>
          <button 
              type="button" 
              class="btn btn-danger btn-lg" 
              @click="$emit('remove-card', item.id)" 
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Delete task">
            <i class="bi bi-trash"></i>
          </button>
        </div>
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
    margin-bottom: 1rem;
  }
</style>