<template>
  <div
    class="card"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseleave="$emit('mouseleave', $event)">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Card',
};
</script>
<style lang="scss">
  @import "~@/styles/variables.scss";
  .card {
    background: $white;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    margin: 0 0 $margin-big;
    padding: $padding-mid;
    text-align: left;
  }
</style>