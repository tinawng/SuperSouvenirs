<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <cards-album v-for="album in albums" :key="album._id" v-bind="album"/>
  </section>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default {
  mixins: [modal],

  computed: {
    albums() {
      return this.$store.getters["library/albums"];
    },
  },

  created() {
    this.$store.dispatch('library/syncAlbums')
  }};
</script>

<style lang="postcss" scoped>
section {
  @apply w-4/5;
  max-width: 1600px;
  @apply mx-auto px-4;
}
</style>