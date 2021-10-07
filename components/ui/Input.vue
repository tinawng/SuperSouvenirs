<template>
  <div
    class="input__container"
    :class="disabled ? 'opacity-40 pointer-events-none' : ''"
    :style="`width: ${width}rem`"
  >
    <utils-icon v-if="icon && !icon_right" class="mr-2.5 text-brand-500" :variant="icon" />
    <input :class="{capitalize: capitalize}" :type="type" v-model="value" :name="name" :placeholder="placeholder" />
    <utils-icon v-if="icon && icon_right" class="ml-auto" :variant="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    width: Number,
    icon_right: Boolean,
    type: { type: String, default: "text" },
    name: String,
    placeholder: String,
    default_value: String,
    disabled: Boolean,
    capitalize: Boolean
  },
  data: () => ({
    show_dropdown: false,
    value: undefined,
  }),
  watch: {
    value: function (value) {
      this.$emit("update:value", value);
    },
    default_value: function (value) {
      this.value = value;
    },
  },

  created() {
    this.value = this.default_value
  },

  methods: {
    setValue(suggested_value) {
      this.value = suggested_value;
    },
  },
};
</script>

<style lang="postcss" scoped>
.input__container {
  @apply relative;
  @apply h-10;
  @apply px-2;
  @apply flex items-center;
  @apply border border-brand-primary border-opacity-30;
  @apply bg-transparent text-brand-primary;
  @apply transition-colors;
}
.input__container:hover {
  @apply border-brand-primary;
}
.input__container:hover input::placeholder {
  @apply text-brand-primary;
}
input {
  @apply w-full;
}
input::placeholder {
  @apply transition-colors;
}
.input__dropdown {
  @apply absolute top-14 left-0 z-50;
  @apply w-full;
  @apply bg-transparent shadow-lg capitalize;
}
.input__dropdown__row {
  @apply h-14;
  @apply pl-4;
  @apply flex items-center;
  @apply transition-colors;
}
.input__dropdown__row:hover {
  @apply bg-brand-primary text-brand-secondary;
}
</style>