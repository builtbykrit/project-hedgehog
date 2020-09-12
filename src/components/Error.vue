<template>
  <div class="errors">
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: {
    message: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .errors {
    color: $black;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    margin: 1rem;
    padding: 0.25rem;
    text-align: left;
    border: 1px solid $black;
  }
</style>