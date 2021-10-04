<template>
  <div class="w-full">
    <section class="mb-20 pt-6">
      <span class="section__title">Albums</span>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <cards-album v-for="album in albums" :key="album._id" v-bind="album" @click.native="selectAlbum(album._id); openModal('album')" />
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

  methods: {
    selectAlbum(album_id) {
      this.$store.commit('library/selectAlbum', album_id);
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>