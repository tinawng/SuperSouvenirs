<template>
  <div class="player__container">
    <audio ref="audio" crossOrigin="anonymous" src="https://tanabata.tina.cafe/supersouvenirs/stream/50"/>
    <ui-player-progress-bar :value="audio_player.current_time / 30" />

    <div class="player__body">
      <div class="player__body__left">
        <img height="80px" width="80px" src="/images/covers/ram.jpg" alt="" />
        <div class="mx-7 flex flex-col justify-center">
          <ui-utils-button icon="plus" small />
          <ui-utils-button class="mt-2" icon="more" small />
        </div>
        <div class="flex flex-col justify-center">
          <h5>Daft Punk</h5>
          <h3 class="text-sm leading-relaxed opacity-90">Contact</h3>
          <h5>Random Access Memories · 2013</h5>
        </div>
      </div>

      <div class="player__body__center">
        <ui-utils-button icon="previous" :outlined="false" :icon_size="48" :icon_stroke="2" />
        <ui-utils-button
          class="mx-3"
          :icon="audio_player.is_playing ? 'pause' : 'play'"
          :icon_size="48"
          round
          thick_outline
          :icon_stroke="2"
          :callback="() => {if ($audio.audio_player) {$audio.playPause(); audio_player = $audio.audio_player}}"
        />
        <ui-utils-button icon="next" :outlined="false" :icon_size="48" :icon_stroke="2" />
      </div>

      <div class="player__body__right">
        <div class="player__body__right__timer">
          <h5 class="tracking-tighter">3:53 / 4:04</h5>
        </div>
        <div class="player__body__right__controls">
          <ui-utils-button class="mr-2" icon="list" :outlined="false" small />
          <div>
            <ui-utils-button
              class="mr-2"
              :class="{'text-brand-accent': shuffle}"
              icon="shuffle"
              :outlined="false"
              small
              :highlighted="shuffle"
              @update:value="shuffle = $event"
            />
            <transition name="fade">
              <ui-icon v-show="shuffle" class="p-1 opacity-80" variant="dot" :size="22" :stroke="2" />
            </transition>
          </div>
          <div>
            <ui-utils-button
              class="mr-4"
              :class="{'text-brand-accent': repeat}"
              icon="repeat"
              :outlined="false"
              small
              :highlighted="repeat"
              @update:value="repeat = $event"
            />
            <transition name="fade">
              <ui-icon v-show="repeat" class="p-1 opacity-80" variant="dot" :size="22" :stroke="2" />
            </transition>
          </div>
          <ui-utils-button class="mr-1" icon="volume" :outlined="false" small />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ audio_player: {}, shuffle: false, repeat: false }),

  mounted() {
    this.$audio.initialize(this.$refs.audio);
  },
};
</script>

<style lang="postcss" scoped>
.player__container {
  @apply fixed bottom-0;
  height: 80px;
  max-height: 80px;
  @apply w-full;
  @apply bg-brand-900;
}

h5 {
  @apply text-2xs;
}

.player__body {
  @apply grid grid-cols-3;
}
.player__body__left {
  @apply flex;
}
.player__body__center {
  padding-left: 80px;
  @apply justify-self-center;
  @apply flex items-center;
  @apply opacity-90;
}
.player__body__right {
  @apply mr-8;
}
.player__body__right__timer {
  height: 29px;
  @apply pt-1;
  @apply flex justify-end;
}
.player__body__right__controls {
  @apply justify-self-end;
  @apply flex justify-end items-start;
}
</style>