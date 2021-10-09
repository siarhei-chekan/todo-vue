<template>
  <div class="signup">
    <SignupHeader />
    <SignupForm />
  </div>
</template>

<script>
import SignupHeader from '@/components/signup/signup-header/SignupHeader.vue';
import SignupForm from '@/components/signup/signup-form/SignupForm.vue';

export default {
  components: {
    SignupHeader,
    SignupForm,
  }
}
</script>

<style>

</style>