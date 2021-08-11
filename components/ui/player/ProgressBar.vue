<template>
  <div class="player-progress-bar__container" :style="css_vars" @mousemove="seeking" @click="seek" >
    <div class="player-progress-bar__body" />
  </div>
</template>

<script>
export default {
  data: () => ({
    seeking_position: 0,
  }),
  computed: {
    css_vars: function () {
      var css_vars = `--seeking-position: ${this.seeking_position * 100}%`;
      return css_vars;
    },
  },

  methods: {
    seeking(event) {
      this.seeking_position = event.offsetX / event.target.clientWidth;
    },
    seek(event) {
      console.log(event);
      // var seeked_ratio = event.offsetX / event.target.clientWidth;
      // var seeked_time = this.player.duration * seeked_ratio;
      // this.$audio.seek(seeked_time);
    },
  },
};
</script>

<style lang="postcss" scoped>
.player-progress-bar__container {
  @apply absolute -top-2;
  @apply h-3 w-screen;
}

.player-progress-bar__body {
  @apply absolute bottom-1;
  height: 3px;
  @apply w-screen;
  @apply bg-brand-700;

  transition-property: top, height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body {
  @apply h-2;
}

.player-progress-bar__body::after {
  content: "";
  @apply absolute top-0 left-0;
  height: 3px;
  @apply w-2/5;
  @apply bg-brand-accent rounded-tr-sm rounded-br-none;

  transition-property: height, border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body::after {
  @apply h-2;
  @apply rounded-r-sm;
}

.player-progress-bar__body::before {
  content: "";
  @apply absolute top-0 left-0;
  height: 3px;
  width: var(--seeking-position);
  @apply opacity-0 bg-brand-accent rounded-r-sm;

  transition-property: height, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body::before {
  @apply h-2;
  @apply opacity-10;
}
</style>