<template>
  <div class="w-full">
    <section class="top_section">
      <span class="title" @click="openModal('album')">Super Souvenirs</span>
      <div class="menu_nav">
        <span class="selected">Albums</span>
        <span>Flow</span>
        <span>Playlist</span>
      </div>
    </section>
    <section class="album_section">
      <h2 class="font-semibold">City Pop</h2>
      <div class="relative mt-6 flex">
        <!-- <div class="absolute right-1 bottom-1 z-10 flex">
          <div class="h-8 w-8 p-1 mr-1.5 rounded-full bg-brand-secondary shadow-md"><ui-icon variant="previous" :stroke="1"/></div>
          <div class="h-8 w-8 p-1 rounded-full bg-brand-secondary shadow-md"><ui-icon variant="next" :stroke="1"/></div>
        </div> -->
        <album-showcase />
      </div>
    </section>
    <section class="album_section">
      <h2 class="font-semibold">Jazz ~ Fusion</h2>
      <div class="relative mt-6 flex">
        <album-showcase backward />
      </div>
    </section>
  </div>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default { mixins: [modal] };
</script>

<style lang="postcss" scoped>
section {
  @apply w-full;
}

.top_section {
  @apply h-64 lg:h-80;
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
  @apply mb-6 mx-auto py-6 px-8;
  @apply rounded-xl bg-brand-secondary-dark;
}
.album_overflow {
}
</style>
