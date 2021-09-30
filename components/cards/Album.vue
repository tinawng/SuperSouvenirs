<template>
  <div class="flex flex-col">
      <img class="border border-opacity-70" :src="'data:image/webp;base64,' + (cover || cover_small)" alt="">
      <h2 class="mt-2 mb-1 border-t border-b border-current font-extrabold">{{title}}</h2>
      <span class="leading-none">{{artist_name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    artist_name: String,
    cover: String,
    cover_small: String,
  }
};
</script>

<style lang="postcss" scoped>
</style>