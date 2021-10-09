<template>
  <button v-bind:type="[type]" :class="[className]">{{ value }}</button>
</template>

<script>
export default {

  props: {
    value: String,
    type: String,
    className: String,
  }
}
</script>
