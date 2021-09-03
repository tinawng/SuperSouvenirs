<template>
  <div class="side-player__container">
    <div class="player-ui">
      <!-- <ui-player /> -->
        <img class="cover" src="/covers/cover3.jpg" alt="" />
      <div class="text-center">
        <p class="text-sm md:text-xl lg:text-2xl"><b>祈り - Prayer = Sala</b></p>
        <span class="text-xs md:text-base lg:text-lg opacity-70">Akira Ishikawa</span>
      </div>
      <ui-progress-bar />
      <div class="p-8 flex items-center text-brand-primary">
        <ui-icon class="icon-sh" variant="more" :size="28" />
        <ui-icon class="mx-12 icon-sh" variant="play" :size="64" />
        <ui-icon class="icon-sh" variant="next" :size="32" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.side-player__container {
  @apply relative;
  @apply max-h-screen w-1/2;
  min-width: 25vw;
  @apply bg-brand-secondary border-r-2;
}
.cover {
  @apply rounded;
  box-shadow: -16px 16px 32px #9d9d9e, 16px -16px 32px #ffffff;
}
.player-ui {
  @apply absolute top-0 z-20;
  @apply h-full w-full;
  @apply p-12;
  @apply flex flex-col justify-between items-center;
}
</style>