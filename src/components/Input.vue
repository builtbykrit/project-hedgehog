<template>
  <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
    class="relative w-full">
    <template>
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
        :maxlength="maxLength"/>
      <label class="input__label">{{ label }}</label>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Input',
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
      default: '',
    },
    /**
     * Input type. Can be changed to password or email, for instance
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * The value for the text input
     */
    value: {
      type: String,
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
      required: true,
    },
    /**
     * The text that appears on hover
     */
    tooltipText: {
      type: String,
      required: false,
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
     * If set to true, input value will be set to uppercase
     */
    uppercase: {
      type: Boolean,
      default: false,
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
      this.$emit('input', this.$refs.input.value);
      if (this.onInputChange) {
        this.onInputChange(this.$refs.input.value);
      }
    },
    updateInputValue() {
      this.$emit('updatedCheckbox', this.checked);
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
