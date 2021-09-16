<template>
  <div class="side-player__container">
    <div class="side-player__container_fixed">
      <div>
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
        <div class="mt-12 text-center">
          <p class="text-base md:text-xl lg:text-3xl"><b>祈り - Prayer = Sala</b></p>
          <span class="text-sm md:text-base lg:text-xl opacity-70">Akira Ishikawa</span>
        </div>
      </div>
      <div>
        <div class="w-3/4 mb-6 mx-auto flex justify-evenly hidden">
          <ui-icon class="h-5 md:h-6 lg:h-7" variant="more" />
          <ui-icon class="h-5 md:h-6 lg:h-7" variant="plus" />
        </div>
        <ui-progress-bar class="mb-6 mx-auto" />
        <div class="side-player__controls ">
          <ui-icon class="h-6 md:h-7 lg:h-8" variant="previous" />
          <ui-icon class="h-12 md:h-16 lg:h-20" variant="play" />
          <ui-icon class="h-6 md:h-7 lg:h-8" variant="next" />
        </div>
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
  min-width: 35vw;
}
.side-player__container_fixed {
  @apply fixed;
  @apply h-full;
  width: 35vw;
  @apply p-8 pb-6 md:pt-12 md:px-12;
  @apply flex flex-col justify-between;
  /* @apply bg-brand-secondary border-r-2; */
}


.cover {
  @apply rounded;
  box-shadow: -16px 16px 32px #9d9d9e, 16px -16px 32px #ffffff;
}

.side-player__controls {
  @apply w-4/5 md:w-3/4;
  @apply mx-auto;
  @apply flex justify-between items-center text-brand-primary;
}
</style>