<template>
  <div class="page__container">
    <div class="h-full w-full flex items-center">
      <div style="transform-style: preserve-3d; perspective: 600px; z-index: 0; " >
        <img class="h-96 w-96 album_cover" src="/mint-jams.jpg" alt="" style=" transform: rotate3d(0, 1, 0, 40deg) translate3d(15vw, 0, 0)" />
      </div>
      <div style="transform-style: preserve-3d; perspective: 600px; z-index: 10; " >
        <img class="h-96 w-96 album_cover" src="/mint-jams.jpg" alt="" style=" transform: rotate3d(0, 0, 0, 40deg)" />
      </div>
      <div style="transform-style: preserve-3d; perspective: 600px; z-index: 20; " >
        <img class="h-96 w-96 album_cover" src="/mint-jams.jpg" alt="" style=" transform: rotate3d(0, -1, 0, 40deg) translate3d(-15vw, 0, 0)" />
      </div>
    </div>
    <div>aled</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    index: 3,
    covers: ["/mint-jams.jpg", "/fav-tune.jpg", "/mint-jams.jpg", "/fav-tune.jpg", "/mint-jams.jpg"],
  }),
};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply w-full;
  @apply grid grid-cols-1 justify-items-center;
  grid-template-rows: calc(100vh - 256px) 128px;
}

.album_cover {
  box-shadow: 0 8px 10px -5px rgba(116, 80, 66, 0.4), 0 16px 24px 2px rgba(109, 75, 62, 0.48),
    0 6px 30px 5px rgba(0, 0, 0, 0.24);
}
</style>