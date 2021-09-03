<template>
  <div class="container  overflow-hidden" :style="`background: ${background}`" @mouseenter="hover = true" @mouseleave="hover = false">
    <slot />

    <div class="mr-1 mb-0.5">
      <transition name="slide-in" mode="out-in">
        <ui-icon v-if="hover" class="p-1.5 border-2 rounded-full" variant="play" :size="36" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["background"],
  data: () => ({
    hover: false,
  }),
};
</script>

<style lang="postcss" scoped>
.container {
  @apply h-60 w-80;
  @apply flex-shrink-0;
  @apply rounded-2xl shadow-xl;

  transition: all 0.3s;

  @apply p-4 flex justify-between items-end text-brand-secondary text-2xl font-semibold;
}
.container:hover {
  @apply -mt-2;
  box-shadow: -20px 10px 16px 1px rgb(0 0 0 / 16%);
}
</style>