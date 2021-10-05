<template>
  <div class="w-full">
    <section class="mb-20 pt-6">
      <span class="section__title">Albums</span>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <cards-album v-for="album in albums" :key="album._id" v-bind="album" @click.native="openModal('album', album._id)" />
    </section>
  </div>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default {
  mixins: [modal],

  computed: {
    albums() {
      let albums = this.$store.getters["library/albums"];
      if (albums.length === 0) this.$store.dispatch("library/syncAlbums");
      return albums;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>