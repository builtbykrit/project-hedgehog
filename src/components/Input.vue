<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="input-wrapper"
    :class="{'text-input-wrapper': ['text', 'password'].includes(type)}">
      <template v-if="type !== 'checkbox'">
      <label class="input__label">{{ label }}</label>
      <input
        :disabled="disabled"
        autocomplete="disabled"
        autocorrect="false"
        spellcheck="false"
        @input="updateValue()"
        :name="name"
        :type="type"
        ref="input"
        class="input"
        :class="[
          {'input--filled': value && value.length > 0},
          {'input--invalid': invalid}
        ]"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxLength"
      />
    </template>
    <div class="checkbox" v-else-if="type === 'checkbox'">
      <input
        v-model="checked"
        @change="updateInputValue()"
        type="checkbox"
        class="checkbox-input"
        :name="name"
        :id="name">
      <label class="checkbox-label" :for="name">
        {{ label }}
      </label>
    </div>
  </div>
</template>
<script>

export default {
  name: "Input",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    /**
     * name of the input
     */
    name: {
      type: String,
    },
    /**
     * Placeholder text inside the input
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * The value for the text input
     */
    value: {
      type: [String, Boolean],
    },
    /**
     * The value for the text input
     */
    checked: {
      type: [Boolean],
    },
    /**
     * The type of input
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * The value for the checkbox input
     */
    checkboxValue: {
      type: Boolean,
    },
    /**
     * The text that will be displayed for the Label
     */
    label: {
      type: String,
    },
    /**
     * Determines whether a field is invalid and should display differently (e.g. a red border)
     */
    invalid: {
      type: Boolean,
      default: false,
    },
    /**
     * The max number of characters of the input field
     */
    maxLength: {
      type: Number,
      default: 524288,
    },
    /**
     * If a side effect needs to be called on change
     */
    onInputChange: {
      type: Function,
      default: null,
    },
    /**
     * Determines whether the input box is disabled or not
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue() {
      if (this.uppercase) {
        this.$refs.input.value = this.$refs.input.value.toUpperCase();
      }
      this.$emit("input", this.$refs.input.value);
      if (this.onInputChange) {
        this.onInputChange(this.$refs.input.value);
      }
    },
    updateInputValue() {
      this.$emit("updatedCheckbox", this.checked);
    },
  },
  mounted() {
    this.checked = this.checkboxValue;
  },
  watch: {
    checkboxValue() {
      this.checked = this.checkboxValue;
    },
  },
};
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .input__label {
    display: block;
  }

  .input-wrapper {
    margin: 0.5rem 0;
  }

  .text-input-wrapper {
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .input {
    margin: 0.25rem 0;
    border-radius: 6px;
    border: 1px solid $grey-light;
    height: 32px;
    margin-bottom: 0.35rem;
    outline: none;
    padding: 4px;
    transition: $transition;

    &--invalid {
      border: 1px solid $red;
    }
  }

  .checkbox {
    height: 32px;
  }
</style>
