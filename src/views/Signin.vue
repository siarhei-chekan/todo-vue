<template>
  <div>
    <SigninHeader />
    <SigninForm />
  </div>
</template>

<script>
import SigninHeader from '@/components/signin/signin-header/SigninHeader.vue';
import SigninForm from '@/components/signin/signin-form/SigninForm.vue';

export default {
  components: {
    SigninHeader,
    SigninForm,
  }
}
</script>

<style>

</style>