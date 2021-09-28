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

    this.$nuxt.$on("player-play", () => {
      html_audio_player.play();
    });
  },
};
</script>

<style>
</style>