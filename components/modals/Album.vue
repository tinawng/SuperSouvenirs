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
          <h3>{{album_duration}}</h3>
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
          :class="{selected: track._id==selected_track_id}"
        >
          <h4>
            <span class="font-light tracking-widest text-2xs mr-3">{{index.toString().padStart(2, '0')}}</span
            >{{track.title}}
          </h4>
          <h4>{{minSecDuration(track.duration)}}</h4>
        </div>
      </div>
      <div class="flex items-end">
        <h5 class="-mb-2">FLAC 16 bits 44.1KHz</h5>
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
    selected_track_id: "6149a197fb0cb153bc456f7e",

    // album: {},
  }),
  computed: {
    album() {
      return this.$store.getters["library/current_album"];
    },
    album_duration() {
      let time = this.album?.track_list.reduce((acc, curr) => {
        acc = acc.duration || acc;
        return (acc += curr.duration);
      });
      return this.minDuration(time);
    },
  },

  created() {
    this.$store.commit('library/retrieveAlbum', "61538338fb0cb153bc4f7fd9");
    this.$store.commit('library/selectAlbum', "61538338fb0cb153bc4f7fd9");

    this.albumz = {
      label: "",
      genre: ["funk"],
      mood: 2,
      _id: "6149a197fb0cb153bc456f7a",
      artist_id: "614454e0fb0cb153bc4002ea",
      title: "Maggot Brain",
      cover: "/covers/cover1.jpg",
      release_year: 1971,
      track_notes: {},
      added_on: "2021-09-21T09:11:48.785Z",
      artist_name: "Funkadelic",
      track_list: [
        {
          _id: "6149a197fb0cb153bc456f7c",
          title: "Maggot Brain",
          __v: 0,
          duration: 611.7333333333333,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/01 Maggot Brain.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f7e",
          title: "Can You Get to That",
          __v: 0,
          duration: 167.61333333333334,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/02 Can You Get to That.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f80",
          title: "You and Your Folks, Me and My Folks",
          __v: 0,
          duration: 211.37333333333333,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/04 You and Your Folks, Me and My Folks.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f82",
          title: "Hit It and Quit It",
          __v: 0,
          duration: 225.96,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/03 Hit It and Quit It.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f84",
          title: "Back in Our Minds",
          __v: 0,
          duration: 159.22666666666666,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/06 Back in Our Minds.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
        {
          _id: "6149a197fb0cb153bc456f86",
          title: "Super Stupid",
          duration: 237.46666666666667,
          metadatas: {},
          path: "[1971] Maggot Brain [Funkadelic]/07 Wars of Armageddon.flac",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.modal_container {
  height: 96vh;
  width: 100vh;
  max-width: 80vw;
  @apply fixed z-50;
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
  @apply ml-2 py-1 pl-4 pr-2;
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