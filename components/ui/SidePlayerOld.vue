<template>
  <div class="side-player__container">
    side-player
    <div class="cover" />
    <div class="player-ui">
      <!-- <ui-player /> -->
      <img src="/covers/cover5.jpg" alt="" />
      <ui-progress-bar />
      <div class="flex items-center text-brand-primary">
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
  min-width: 33%;
  @apply w-1/2;
  @apply shadow-lg;


  background-image: url("/covers/cover5.jpg");
  background-size: 300%;
  background-position: center center;
}
.cover {
  @apply absolute top-0;
  @apply h-full w-full;
  background-color: #F2F2F3DD;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 10px 14px -6px rgb(0 0 0 / 20%), 0 22px 35px 3px rgb(0 0 0 / 20%), 0 8px 32px 7px rgb(0 0 0 / 20%);
}
.cover-dark {
  @apply absolute top-0 z-10;
  @apply h-full w-full;
  background-color: rgba(0, 0, 0, 0.12);
  backdrop-filter: saturate(120%) blur(20px);
  box-shadow: 0 10px 14px -6px rgb(0 0 0 / 20%), 0 22px 35px 3px rgb(0 0 0 / 20%), 0 8px 32px 7px rgb(0 0 0 / 20%);
}
.icon-sh {
  filter: drop-shadow(0 10px 15px -3px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 6px -2px rgba(0, 0, 0, 0.05));
}
.player-ui {
  @apply absolute top-0 z-20;
  @apply h-full w-full;
  @apply p-20;
  @apply flex flex-col justify-between items-center;
}
</style>