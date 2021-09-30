<template>
  <div v-if="track" class="player_container">
    <div class="relative h-full w-full p-2 flex justify-between">
      <div class="flex flex-col justify-between">
        <h4 class="font-black leading-none">{{track.title}}</h4>
        <h4 class="font-semibold">{{album.artist_name}}</h4>
      </div>
      <ui-button icon="play" @click.native="play" />
      <div class="player__right_lip"></div>
      <div class="player__bottom_lip"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    track() {
      return this.$store.getters["library/current_track"];
    },
    album() {
      return this.$store.getters["library/current_album"];
    },
  },

  methods: {
    play() {
      this.$nuxt.$emit("player-play");
    },
  },
};
</script>

<style lang="postcss" scoped>
.player_container {
  @apply fixed bottom-12 right-12;
  @apply w-64 lg:w-96 h-18 lg:h-24;
  @apply border border-current bg-brand-secondary;
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