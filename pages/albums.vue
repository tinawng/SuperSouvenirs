<template>
  <div class="page__container">
    <!-- <div class="px-2 py-0.5 col-span-4 bg-brand-primary text-brand-secondary">
      <h1>40 albums</h1>
    </div>
    <div class="col-span-4">
    </div>
    <div v-for="i in 40" :key="i" :class="{'col-span-2 row-span-2': i == 1}">
      <img class="album_cover" width="100%" src="/mint-jams.jpg" alt="" />
      <h2>Mint Jams</h2>
      <h3>Casiopea</h3>
    </div> -->

    <!-- <div>
      <h1 class="mb-6 ">New</h1>
      <img class="album_cover" src="/mint-jams.jpg" alt="" />
      <span class="mt-2 text-xl"><b>Mint Jams</b> Casiopea</span>
    </div>
    <div>
      <h1 class="mb-6">Soul</h1>
      <div class=" grid grid-cols-2 grid-rows-2 gap-4">
        <img class="album_cover w-full" src="/covers/cover1.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover2.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover3.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover4.jpg" alt="" />
      </div>
    </div>
    <div>
      <h1 class="mb-6">Funk</h1>
      <div class=" grid grid-cols-2 grid-rows-2 gap-4">
        <img class="album_cover w-full" src="/covers/cover.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover5.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover6.jpg" alt="" />
        <img class="album_cover w-full" src="/covers/cover7.jpg" alt="" />
      </div>
    </div> -->

    <div class="flex flex-col">
      <div class="mb-4 flex pb-2 border-b-2 border-brand-primary">
        <h1>New</h1>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <img class="album_cover" src="/covers/cover.jpg" alt="" />
        <img class="album_cover" src="/covers/cover5.jpg" alt="" />
        <img class="album_cover" src="/covers/cover6.jpg" alt="" />
        <img class="album_cover" src="/covers/cover7.jpg" alt="" />
      </div>
    </div>

    <div class="flex flex-col">
      <div class="mb-4 flex pb-2 border-b-2 border-brand-primary">
        <h1>Popular</h1>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <img class="album_cover" src="/covers/cover1.jpg" alt="" />
        <img class="album_cover" src="/covers/cover2.jpg" alt="" />
        <img class="album_cover" src="/covers/cover3.jpg" alt="" />
        <img class="album_cover" src="/covers/cover4.jpg" alt="" />
      </div>
    </div>

    <div class="col-span-2 flex flex-col">
      <div class="mb-4 flex justify-between items-end  pb-2 border-b-2 border-brand-primary">
        <h1>All</h1>
        <h4 class="flex items-center uppercase">
          <button class="mr-2" icon="down" rounded :size="16" :icon_size="14" /> by years
        </h4>
      </div>
      <div class="grid grid-cols-8 gap-4">
        <img class="album_cover" src="/covers/cover1.jpg" alt="" />
        <img class="album_cover" src="/covers/cover2.jpg" alt="" />
        <img class="album_cover" src="/covers/cover3.jpg" alt="" />
        <img class="album_cover" src="/covers/cover4.jpg" alt="" />
        <img class="album_cover" src="/covers/cover.jpg" alt="" />
        <img class="album_cover" src="/covers/cover5.jpg" alt="" />
        <img class="album_cover" src="/covers/cover6.jpg" alt="" />
        <img class="album_cover" src="/covers/cover7.jpg" alt="" />
        <img class="album_cover" src="/covers/cover.jpg" alt="" />
        <img class="album_cover" src="/covers/cover5.jpg" alt="" />
        <img class="album_cover" src="/covers/cover6.jpg" alt="" />
        <img class="album_cover" src="/covers/cover7.jpg" alt="" />
        <img class="album_cover" src="/covers/cover1.jpg" alt="" />
        <img class="album_cover" src="/covers/cover2.jpg" alt="" />
        <img class="album_cover" src="/covers/cover3.jpg" alt="" />
        <img class="album_cover" src="/covers/cover4.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply px-24;
  /* @apply grid grid-cols-4 gap-10; */
  @apply grid grid-cols-2 gap-10;
  @apply bg-brand-secondary;
}

.album_cover {
  @apply rounded shadow-xl;
  /* box-shadow: 0 8px 10px -5px rgba(116, 80, 66, 0.4), 0 16px 24px 2px rgba(109, 75, 62, 0.48),
    0 6px 30px 5px rgba(0, 0, 0, 0.24); */
}
</style>