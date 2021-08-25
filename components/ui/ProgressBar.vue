<template>
  <div class="progress_bar__container">
    <div class="progress_bar__body" />
    <div class="progress_bar__progress" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.progress_bar__container {
  @apply relative;
  @apply h-4 w-96;
  @apply -mt-1;
  @apply flex items-center;
}

.progress_bar__body {
  @apply h-1 w-full;
  @apply bg-brand-primary opacity-10;
}

.progress_bar__progress {
  @apply absolute;
  @apply h-1 w-3/4;
  @apply bg-brand-primary;
}
</style>