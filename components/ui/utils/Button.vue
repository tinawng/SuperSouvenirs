<template>
  <div
    class="button__container"
    :class="{
      'button__primary': primary,
      'button__outlined': outlined,
      'button__highlighted': highlighted,
      'button__icon': !this.$slots.default && icon,
      'button__text': !!this.$slots.default,
      'button__small': small,
      'button__thick_outline': thick_outline
    }"
    @click="local_callback"
  >
    <ui-icon v-if="icon && !!this.$slots.default" class="mr-1" :variant="icon" :size="16" :stroke="icon_stroke" />
    <ui-icon v-else-if="icon && small" class="p-1" :variant="icon" :size="22" :stroke="icon_stroke"/>
    <ui-icon v-else-if="icon" style="padding: 24%" :variant="icon" :size="icon_size" :stroke="icon_stroke" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    outlined: { type: Boolean, default: true },
    primary: Boolean,
    transparent: { type: Boolean, default: true },
    highlighted: Boolean,
    thick_outline: Boolean,
    small: Boolean,
    icon_size: { type: Number, default: 42 },
    icon_stroke: { type: Number, default: 2 },
    callback: { type: Function, default: () => {} },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data: () => ({ value: false }),
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
  height: fit-content;
  width: min-content;
  @apply py-1 px-6;
  @apply flex items-center;
  @apply rounded-full;
  @apply text-brand-white text-opacity-80 text-xs font-semibold uppercase tracking-widest;
  @apply cursor-pointer;
  @apply transition-colors;
}

.button__primary {
  @apply bg-brand-accent-dark;
}
.button__highlighted {
 @apply text-brand-accent;
}
.button__outlined {
  @apply border border-opacity-40;
}
.button__icon {
  @apply p-0;
  @apply border-opacity-20;
}
.button__thick_outline {
  @apply border-2;
}

.button__text:hover {
  @apply bg-brand-white text-brand-800;
}
.button__icon:hover {
  @apply text-brand-accent border-brand-accent;
}
.button__outlined:hover:not(.button__thick_outline) {
  @apply bg-brand-white text-brand-800 border-opacity-0;
}

</style>