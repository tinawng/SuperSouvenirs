<template>
  <div class="side-player__container">
    <div class="player-ui">
      <div class="relative">
        <img class="cover" src="/covers/cover3.jpg" alt="" />
        <h6 class="absolute -bottom-5 md:-bottom-6 right-0.5">
          <span
            class="p-0.5 px-1 rounded opacity-20 text-3xs md:text-2xs tracking-widest bg-brand-primary text-brand-secondary"
          >
            FLAC
          </span>
        </h6>
      </div>
      <div class="text-center">
        <p class="text-base md:text-xl lg:text-3xl"><b>祈り - Prayer = Sala</b></p>
        <span class="text-sm md:text-base lg:text-xl opacity-70">Akira Ishikawa</span>
      </div>
      <div class="w-3/4 -my-4 flex justify-evenly">
        <ui-icon class="h-5 md:h-6 lg:h-7 icon-sh" variant="more" />
        <ui-icon class="h-5 md:h-6 lg:h-7 icon-sh" variant="plus" />
      </div>
      <ui-progress-bar class="-mb-4" />
      <div class="w-3/4 flex justify-between items-center text-brand-primary">
        <ui-icon class="h-6 md:h-7 lg:h-8 icon-sh" variant="previous" />
        <ui-icon class="h-12 md:h-16 lg:h-20 icon-sh" variant="play" />
        <ui-icon class="h-6 md:h-7 lg:h-8 icon-sh" variant="next" />
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
  @apply p-8 md:p-12;
  @apply flex flex-col justify-between items-center;

  max-height: 550px;
  @media (min-width: 1081px) {
    max-height: 722px;
  }
  @media (min-width: 1920px) {
    max-height: 920px;
  }
}
</style>