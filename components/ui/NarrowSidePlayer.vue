<template>
  <div class="narrow-player__container">
    <div class="cover" />

    <div class="absolute top-0 z-20 h-full w-full py-8 flex justify-center items-end text-brand-secondary">
      <ui-icon class="icon-sh" variant="play" :size="56" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.narrow-player__container {
  @apply relative;
  min-width: 6rem;
  @apply w-24;

  box-shadow: 0 10px 14px -6px rgb(0 0 0 / 20%), 0 22px 35px 3px rgb(0 0 0 / 20%), 0 8px 32px 7px rgb(0 0 0 / 20%);
  background-image: url("/covers/cover5.jpg");
  background-position: center center;
}

.cover {
  @apply absolute top-0;
  @apply h-full w-full;
  background-color: rgba(0, 0, 0, 0.12);
  backdrop-filter: saturate(90%) brightness(160%) blur(20px);
}
.icon-sh {
  filter: drop-shadow(0 10px 15px -3px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 6px -2px rgba(0, 0, 0, 0.05));
}
</style>