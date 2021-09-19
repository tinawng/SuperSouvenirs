<template>
  <div class="w-full">
    <section class="top_section">
      <span class="title">Super Souvenirs</span>
      <div class="menu_nav">
        <span class="selected">Albums</span>
        <span>Flow</span>
        <span>Playlist</span>
      </div>
    </section>
    <section class="album_section">
      <h2 class="font-normal">City Pop</h2>
      <div class="relative mt-6 flex">
        <div class="absolute -right-3 -bottom-2 flex">
          <div class="h-8 w-8 p-1 mr-1 rounded-full bg-brand-primary text-brand-secondary"><ui-icon variant="previous" :stroke="1"/></div>
          <div class="h-8 w-8 p-1 rounded-full bg-brand-primary text-brand-secondary"><ui-icon variant="next" :stroke="1"/></div>
        </div>
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover.jpg" alt="">
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover.jpg" alt="">
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover.jpg" alt="">
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover.jpg" alt="">
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover.jpg" alt="">
        <img class="w-44 mr-4 rounded-xl" src="/covers/cover3.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
section {
  @apply w-full;
}

.top_section {
  @apply h-80;
  @apply flex flex-col items-center justify-around;
}
.title {
  font-family: "Helvetica Now Display";
  @apply text-8xl font-extrabold;
}
.menu_nav {
  @apply w-1/2;
  @apply flex justify-between;
  @apply text-2xl;
}
.menu_nav > .selected {
  @apply font-bold;
  @apply border-brand-primary border-b-2;
}

.album_section {
  @apply w-3/4;
  @apply py-6 px-8 mx-auto;
  @apply rounded-xl bg-brand-secondary-dark;
  /* @apply flex */
}
</style>
