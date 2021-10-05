<template>
  <audio ref="html_audio_player" :src="'https://tanabata.tina.cafe/supersouvenirs/stream/' + track_id" />
</template>

<script>
export default {
  computed: {
    track_id() {
      return this.$store.getters["library/current_track"]._id;
    },
  },

  mounted() {
    let html_audio_player = this.$refs.html_audio_player;

    html_audio_player.addEventListener('ended', () => {
      this.$nuxt.$emit('player-next');
    })

    this.$nuxt.$on("player-play", () => {
      html_audio_player.play();
    });
    this.$nuxt.$on("player-next", () => {
      let album = this.$store.getters['library/current_album'];
      let current_index = album.track_list.findIndex(album => album._id === this.track_id);
      let next_track = album.track_list[++current_index]; // FIXME: out of bound && no found => -1
      this.$store.commit('library/selectTrack', next_track._id);
    });
  },
};
</script>

<style>
</style>