<template>
  <button
    :class="[
      'button__container',
      icon
        ? !!this.$slots.default
          ? 'button__icon px-5 bg-brand-100'
          : 'button__icon'
        : small ? 'button__text_small' : 'button__text',
      dark ? 'button__dark' : '',
      rounded ? 'button__rounded' : '',
      squared ? 'button__squared' : '',
      disabled ? 'opacity-40 pointer-events-none' : ''
    ]"
    :style="css_var"
    @click="local_callback"
    @mouseenter="callback_hover"
  >
    <ui-icon
      v-if="icon"
      :class="!!this.$slots.default ? 'mr-4' : 'mx-auto'"
      :variant="icon"
      :size="icon_size"
      :stroke="icon_stroke"
    />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    dark: Boolean,
    rounded: Boolean,
    squared: Boolean,
    disabled: Boolean,
    small: Boolean,
    size: { type: Number, default: 56 },
    icon_size: { type: Number, default: 24 },
    icon_stroke: { type: Number, default: 1.5 },
    callback: { type: Function, default: () => {} },
    callback_hover: { type: Function, default: () => {} },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data: () => ({ value: false }),
  computed: {
    css_var: function () {
      return "--size: " + this.size + "px";
    },
  },
  methods: {
    local_callback() {
      this.value = !this.value;
      this.$emit("update:value", this.value);
      this.callback();
    },
  },
};
</script>

<style lang="postcss" scoped>
.button__container {
  height: var(--size);
  @apply font-medium text-brand-primary;
  @apply transition-colors;
}

.button__text {
  @apply px-8;
  /* @apply bg-brand-primary; */
}

.button__text_small {
  @apply px-6;
  /* @apply bg-brand-100; */
  @apply text-xs tracking-wide leading-loose;
}

.button__icon {
  min-width: var(--size);
  @apply flex items-center;
}

.button__dark,
.button__container:hover {
  @apply bg-brand-primary text-brand-secondary;
}
.button__container:active {
  /* @apply bg-brand-700 text-brand-100; */
}

.button__dark:hover {
  @apply bg-brand-primary;
}
.button__dark:active {
  @apply bg-brand-primary-light;
}

.button__rounded {
  @apply rounded-full;
}

.button__squared {
  min-width: var(--size);
  width: var(--size);
  max-width: var(--size);
  @apply px-0;
}
</style>