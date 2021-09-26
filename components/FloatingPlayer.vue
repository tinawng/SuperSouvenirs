<template>
  <div class="player_container">
    <div class="relative h-full w-full p-2 flex justify-between">
      <div class="">
        <h3 class="font-black leading-none">A3. 動物 - Animals = Mnama.flac</h3>
        <h3 class="font-semibold">Akira Ishikawa</h3>
      </div>
      <ui-button icon="play"/>
      <div class="player__right_lip"></div>
      <div class="player__bottom_lip"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.player_container {
  @apply fixed bottom-12 right-12;
  @apply w-60 lg:w-96 h-16 lg:h-24;
  @apply border border-brand-primary bg-brand-secondary;
  @apply shadow-xl;
}

.player__right_lip {
  @apply absolute top-3 -right-3 lg:top-4 lg:-right-4;
  @apply h-full w-3 lg:w-4;
  @apply bg-brand-primary;
}
.player__bottom_lip {
  @apply absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4;
  @apply h-3 lg:h-4 w-full;
  @apply bg-brand-primary;
}
</style>