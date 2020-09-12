<template>
  <button
    :disabled="inFlight || disabled"
    @click.stop="click"
    class="button in-flight"
    :class="{
            'in-flight': inFlight,
            'primary': type === 'primary',
            'secondary': type === 'secondary',
            'no-padding': noPadding,
          } "
  >
    <!-- @slot Button text -->
    <slot v-if="!inFlight"></slot>
    <span v-else>loading...</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * Some buttons should react correctly to asyncronous actions. This will set the inflight state
     * correctly. Currently disabling, but eventually it will also display the correct animation
     */
    inFlight: Boolean,
    /**
     * Whether or not the button should be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Adds type to determine primary or secondary button styling
     */
    type: {
      type: String,
      default: "primary",
    },
    /**
     * For secondary buttons that should be left-aligned with no padding
     */
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit("onClick");
    },
  },
};
</script>

// <style scoped lang="scss">
@import "~@/styles/variables.scss";
$transition: 0.3s ease-in-out;

.button {
  border-radius: $border-radius;
  border-width: 0;
  box-shadow: none;
  color: $white;
  cursor: pointer;
  font-family: $body;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  min-width: golden-ratio($base-font-size, 4);
  outline: none;
  padding: 0.75rem $padding-mid;
  position: relative;
  transition: $transition;

  &.primary {
    border: 1px solid $white;
    padding: 0.75rem 1rem;
    background-color: $primary;
    border: $primary 2px solid;
  }
  &.primary:hover, &.primary:focus {
    background: $light;
    color: $black;
    border: $black 2px solid;
  }
}

</style>