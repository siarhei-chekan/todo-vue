<template>
  <div>
    <SigninHeader />
    <SigninForm @log-in="onLogIn" />
  </div>
</template>

<script>
import SigninHeader from '@/components/signin/signin-header/SigninHeader.vue';
import SigninForm from '@/components/signin/signin-form/SigninForm.vue';

export default {
  components: {
    SigninHeader,
    SigninForm,
  },

  methods: {
    onLogIn(userName) {
      this.$emit('log-in', userName);
    }
  }
}
</script>

<style>

</style>