<template>
  <transition name="slide-fade">
    <div v-if="show_modal" class="container">
      <div class="relative h-fit w-full">
        <img class="cover" :src="album.cover" alt="cover" />
        <div class="absolute top-6 -right-6 w-6 h-full bg-brand-primary"></div>
        <div class="absolute -bottom-6 -right-6 w-full h-6 bg-brand-primary"></div>
      </div>
      <div class="ml-12 p-8 text-right break-words">
        <h1>{{album.artist_name}}</h1>
        <h2>{{album.title}}</h2>
        <h3>{{album_duration}} min</h3>
        <ui-button>EDIT</ui-button>
      </div>
      <div class="relative px-8 col-span-2">
        <div v-for="track in album.track_list" :key="track._id" class="flex justify-between">
          <h3>{{track.title}}</h3>
          <h3>2min34</h3>
        </div>
        <span class="release_year">{{album.release_year}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default {
  mixins: [modal],
  data: () => ({
    modal_name: "album",

    album: {},
  }),
  computed: {
    album_duration() {
      return 31;
    },
  },

  created() {
    this.album = {
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
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.container {
  height: 100vh;
  width: 100vh;
  @apply fixed top-0 z-50;
  left: calc(50% - 50vh);
  @apply p-8;
  @apply bg-brand-secondary;
  box-shadow: 0 51px 55px -7px rgba(0, 0, 0, 0.2), 0 64px 78px 3px rgba(0, 0, 0, 0.14),
    0 9px 86px 8px rgba(0, 0, 0, 0.12);
  @apply grid grid-cols-2;
}

.cover {
  @apply w-full;
}

.release_year {
  font-family: "Helvetica Now Display";
  @apply absolute right-0 -bottom-20;
  @apply font-semibold;
  font-size: 9rem;
  line-height: 1;
}
</style>