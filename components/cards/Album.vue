<template>
  <div class="flex flex-col">
    <img class="border border-opacity-70" :src="'data:image/webp;base64,' + (cover || cover_small)" alt="cover"/>
    <span class="title">{{title}}</span>
    <span class="artist_name">{{artist_name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    artist_name: String,
    cover: String,
    cover_small: String,
  },
};
</script>

<style lang="postcss" scoped>
.title {
  @apply mt-2 mb-1;
  @apply border-t border-b border-current;
  @apply text-xl md:text-lg font-semibold;
}
.artist_name {
  @apply text-sm md:text-base leading-none
}
</style>