<template>
  <div class="player__container">
    <ui-button icon="previous" class="bg-brand-primary bg-opacity-5" rounded :size="36" :icon_size="24"/>
    <ui-button class="mx-6 bg-brand-primary bg-opacity-5" icon="play" rounded :size="80" :icon_size="40"/>
    <ui-button icon="next" class="bg-brand-primary bg-opacity-5" rounded :size="36" :icon_size="24"/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.player__container {
  @apply px-12;
  @apply flex justify-center items-center;
}
.player__play_button {
  @apply w-20 h-20;
  @apply mx-6 p-5;
  @apply rounded-full;
  @apply bg-brand-primary text-brand-secondary;
}
.player__next_button {
  @apply w-9 h-9;
  @apply p-1.5;
  @apply rounded-full;
  @apply bg-brand-primary text-brand-secondary;
}
</style>