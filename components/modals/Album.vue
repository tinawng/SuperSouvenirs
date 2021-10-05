<template>
  <transition name="slide-fade">
    <div v-if="show_modal" class="modal_container" v-click-outside="closeModal">
      <div class="relative h-fit w-full">
        <img class="cover" :src="'data:image/webp;base64,' + album.cover" alt="cover" />
        <div class="cover__right_lip" />
        <div class="cover__bottom_lip" />
      </div>
      <div class="ml-12 p-6 pb-0 -mb-0 flex flex-col justify-between">
        <div class="text-right break-words">
          <h1>{{album.artist_name}}</h1>
          <h2>{{album.title}}</h2>
          <h4>{{album_duration}}</h4>
        </div>
        <div class="flex justify-end">
          <ui-button class="mr-3">EDIT</ui-button>
          <ui-button dark>LISTEN</ui-button>
        </div>
      </div>
      <div class="track_list">
        <div
          v-for="(track, index) in album.track_list"
          :key="track._id"
          class="track_list__row"
          :class="{selected: track._id==current_track._id}"
          @click="selectTrack(track._id)"
        >
          <h5>
            <span class="font-light tracking-widest text-2xs mr-3">{{(++index).toString().padStart(2, '0')}}</span
            >{{track.title}}
          </h5>
          <h5>{{minSecDuration(track.duration)}}</h5>
        </div>
      </div>
      <div class="flex items-end">
        <span class="audio_format">FLAC 16 bits 44.1KHz</span>
        <span class="release_year">{{album.release_year}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import modal from "~/mixins/Modal.js";
import duration_formatter from "~/mixins/DurationFormatter.js";
export default {
  mixins: [modal, duration_formatter],
  data: () => ({
    modal_name: "album",
  }),
  computed: {
    album() {
      let album = this.$store.getters["library/album"](this.payload);
      if (!album.track_list) this.$store.dispatch("library/retrieveAlbum", album._id);
      return album;
    },
    current_track() {
      return this.$store.getters["library/current_track"];
    },
    album_duration() {
      let time;
      if (this.album.track_list?.length) {
        time = this.album.track_list.reduce((acc, curr) => {
          acc = acc.duration || acc;
          return (acc += curr.duration);
        });
      }
      return time ? this.minDuration(time) : "-- min";
    },
  },

  methods: {
    selectTrack(track_id) {
      this.$store.commit('library/selectAlbum', this.album._id);
      this.$store.commit('library/selectTrack', track_id);
    }
  }
};
</script>

<style lang="postcss" scoped>
.modal_container {
  height: 96vh;
  width: 100vh;
  max-width: 80vw;
  @apply fixed z-40;
  top: 2vh;
  left: calc(50% - 50vh);
  @apply p-8;
  @apply bg-brand-secondary overflow-hidden;
  box-shadow: 0 51px 55px -7px rgba(0, 0, 0, 0.2), 0 64px 78px 3px rgba(0, 0, 0, 0.14),
    0 9px 86px 8px rgba(0, 0, 0, 0.12);
  @apply grid grid-cols-2;
  grid-template-rows: 1fr 1fr 12.5%;
}

.cover {
  @apply w-full;
}
.cover__right_lip {
  @apply absolute top-6 -right-6 lg:top-8 lg:-right-8;
  @apply h-full w-6 lg:w-8;
  @apply bg-brand-primary;
}
.cover__bottom_lip {
  @apply absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8;
  @apply h-6 lg:h-8 w-full;
  @apply bg-brand-primary;
}

.track_list {
  @apply relative;
  @apply mt-14 lg:mt-20 px-4;
  @apply col-span-2 overflow-scroll;
}
.track_list__row {
  @apply ml-2 py-1.5 pl-4 pr-2;
  @apply flex justify-between;
  @apply border-l-2 border-brand-primary;
  @apply cursor-pointer;
  @apply transition-colors;
  transition-duration: 75ms;
}
.track_list__row:hover {
  @apply bg-brand-secondary-dark;
  @apply cursor-pointer;
  transition-duration: 150ms;
}
.track_list__row:active {
  @apply bg-brand-primary text-brand-secondary;
}
.track_list__row.selected {
  @apply bg-brand-primary text-brand-secondary;
}

.audio_format {
  @apply -mb-2;
  @apply text-3xs lg:text-xs tracking-widest;
}

.release_year {
  font-family: "Helvetica Now Display";
  @apply absolute right-6 -bottom-12;
  @apply font-semibold;
  line-height: 1;
  font-size: 9rem;
  @media (min-width: 1920px) {
    @apply -bottom-20;
    font-size: 15rem;
  }
}
</style>