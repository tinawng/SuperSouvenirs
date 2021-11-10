<template>
  <div class="button_icon__container">
    <utils-icon class="h-5 w-5" :variant="icon" :stroke="2"/>
  </div>
</template>

<script>
export default {
  props: { icon: String },
};
</script>

<style lang="postcss" scoped>
.button_icon__container {
    @apply p-1.5;
    @apply opacity-80;
    @apply rounded-full;
    @apply cursor-pointer;

    @apply transition-colors;
}
.button_icon__container:hover {
    @apply bg-dark bg-opacity-10;
}
</style>