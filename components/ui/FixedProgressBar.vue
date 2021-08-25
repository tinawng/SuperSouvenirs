<template>
  <div class="player-progress-bar__container" :style="css_vars" @mousemove="seeking" @click="seek" >
    <div class="player-progress-bar__body" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    seeking_position: 0,
  }),
  computed: {
    css_vars: function () {
      var css_vars = `--seeking-position: ${this.seeking_position * 100}%;`;
      css_vars += `--current-position: ${this.value * 100}%;`;
      return css_vars;
    },
  },
   watch: {
    // current_time: function (value) {
    // },
  },

  methods: {
    seeking(event) {
      this.seeking_position = event.offsetX / event.target.clientWidth;
    },
    seek(event) {
      console.log(event);
      this.$audio.seek();
      // var seeked_ratio = event.offsetX / event.target.clientWidth;
      // var seeked_time = this.player.duration * seeked_ratio;
      // this.$audio.seek(seeked_time);
    },
  },
};
</script>

<style lang="postcss" scoped>
/* 🎯 Hitbox */
.player-progress-bar__container {
  @apply fixed bottom-0 left-0;
  @apply h-12 w-screen;
}

.player-progress-bar__body {
  @apply absolute bottom-0 left-0;
  @apply h-5 w-screen;

  transition-property: top, height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body {
  @apply h-4;
}

.player-progress-bar__body::after {
  content: "";
  @apply absolute bottom-0 left-0;
  @apply h-1.5;
  width: var(--current-position);
  @apply w-2/5;
  @apply bg-brand-primary rounded-tr-sm rounded-br-none;

  transition-property: height, border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body::after {
  @apply h-5;
  @apply rounded-r-sm;
}

.player-progress-bar__body::before {
  content: "";
  @apply absolute bottom-0 left-0;
  @apply h-1.5;
  width: var(--seeking-position);
  @apply opacity-0 bg-brand-primary;

  transition-property: height, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.player-progress-bar__container:hover .player-progress-bar__body::before {
  @apply h-5;
  @apply opacity-20;
}
</style>