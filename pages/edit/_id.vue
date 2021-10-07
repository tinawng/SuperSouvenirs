<template>
  <div class="w-full">
    <section class="mb-20 pt-6">
      <span class="section__title">Edit</span>
    </section>
    <section>
      <img class="w-1/4" :src="'data:image/webp;base64,' + album.cover" alt="cover" />
    </section>
    <section class="mt-20 text-right">
      <h1>Track List</h1>
    </section>
    <section class="mt-1">
      <div class="grid">
        <div class="track_list__row" v-for="(track, index) in album.track_list" :key="track._id">
          <div class="flex items-center">
            <h1 class="font-bold">{{index+1}}</h1>
            <ui-button
              class="h-6 ml-auto"
              icon="up"
              :disabled="index===0"
              @click.native="updateTrackPosition(track._id, index, index-1)"
            />
            <ui-button
              class="h-6 mr-3"
              icon="down"
              :disabled="index==album.track_list.length-1"
              @click.native="updateTrackPosition(track._id, index, index+1)"
            />
          </div>
          <!-- <ui-input name="title" :default_value="track.title" /> -->
          {{track.title}}
          <h4 class="justify-self-end">{{minSecDuration(track.duration)}}</h4>
        </div>
      </div>
    </section>

    <!-- <section class="grid grid-cols-4 gap-x-8">
      <div>
        <h1>{{album.title}}</h1>
        <h2>{{album.artist_name}}</h2>
      </div> -->
    <!-- <form :action="backend_url + '/library/album'" method="POST" v-on:submit.prevent="onSubmit"> -->
    <!-- <ui-input name="title" :placeholder="album.title" disabled /> -->
    <!-- </form> -->
    <!-- </section> -->
  </div>
</template>

<script>
import duration_formatter from "~/mixins/DurationFormatter.js";
export default {
  mixins: [duration_formatter],
  data: () => ({}),
  computed: {
    album() {
      let album = this.$store.getters["library/album"](this.$route.params.id);
      if (!album.track_list) this.$store.dispatch("library/retrieveAlbum", this.$route.params.id);
      return album;
    },
    backend_url() {
      return process.env.BACKEND_URL;
    },
  },

  methods: {
    updateTrackPosition(track_id, old_position, new_position) {
      [this.album.track_list[new_position], this.album.track_list[old_position]] = [
        this.album.track_list[old_position],
        this.album.track_list[new_position],
      ];

    //   this.album.track_list = [...this.album.track_list];
      // TODO: store mutation
      // TODO: POST
    },
  },
};
</script>

<style lang="postcss" scoped>
.track_list__row {
  @apply p-2;
  @apply grid items-center;
  grid-template-columns: 10% 1fr 8%;
  @apply border-t border-brand-primary;
}

.cc {
  @apply border border-brand-primary;
}
.cc::placeholder {
  @apply text-brand-primary;
}
</style>