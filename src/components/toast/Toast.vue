<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">{{title}}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{msg}}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'msg',
    'title'
  ]
}
</script>

<style lang="scss" scoped>
  // .toast-body {
  //   text-align: center;
  // }
</style>
