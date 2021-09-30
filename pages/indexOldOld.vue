<template>
  <div class="page__container">
    <h1 class="">Choose Your Mood</h1>
    <div ref="aled" class="vibe-card__container">
      <ui-card-vibe background="linear-gradient(45deg, #fbca88, #ef69ad)">Chill Vibes</ui-card-vibe>
      <ui-card-vibe background="linear-gradient(72deg,#F32F8E,#B236D0)">CityPop Vibes</ui-card-vibe>
      <ui-card-vibe background="linear-gradient(23deg,#DA1FF2,#4C15D0)">Jazz Vibes</ui-card-vibe>
      <ui-card-vibe background="linear-gradient(45deg,#476892,#59355D)">Soul Vibes</ui-card-vibe>
      <ui-card-vibe background="linear-gradient(128deg,#C3A8EE,#F5C1EA)">Ghibli Vibes</ui-card-vibe>
    </div>
    <div class="my-6 flex items-end">
      <h1 class="mr-4 md:mr-8">Recently Played</h1>
      <h1 class="mr-4 md:mr-8 small opacity-20">Playlist</h1>
      <h1 class="mr-4 md:mr-8 small opacity-20">Albums</h1>
    </div>
    <div ref="lib" class="album-library">
      <img
        v-for="(album, index) in albums"
        :key="album.cover"
        class="album_cover"
        :style="items_positions_array[0][index]"
        :src="'data:image/webp;base64,'+album.cover_small"
      />
      <div
        v-for="(album, index) in albums"
        :key="album.title"
        class="mb-4"
        :style="`${items_positions_array[1][index]}`"
      >
        <p class="album_title">
          {{album.title}}
        </p>
        <span class="album_artist">{{album.artist_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    item_per_row: 4,

    albums: [],
  }),
  computed: {
    items_positions_array: function () {
      var arr = [[], []];

      for (let i = 0; i < this.albums.length; i++) {
        var curr_row = Math.floor(i / this.item_per_row) * 2;
        var first_of_row = i % parseInt(this.item_per_row) === 0;

        var cover_position = `order: ${this.item_per_row * curr_row + i};`;
        var description_position = `order: ${this.item_per_row * (curr_row + 1) + i};`;

        if (first_of_row) description_position += `grid-column-start: 1;`;

        arr[0].push(cover_position);
        arr[1].push(description_position);
      }

      return arr;
    },
  },

  async created() {
    this.albums = await this.$http.$get(`${process.env.BACKEND_URL}/library/albums`);
  },

  mounted() {
    const slider = this.$refs.aled;

    var self = this;
    slider.addEventListener(
      "mousedown",
      (e) => {
        self.isDown = true;
        slider.classList.add("active");
        self.startX = e.pageX - slider.offsetLeft;
        self.scrollLeft = slider.scrollLeft;
      },
      { passive: true }
    );
    slider.addEventListener(
      "mouseleave",
      () => {
        self.isDown = false;
        slider.classList.remove("active");
      },
      { passive: true }
    );
    slider.addEventListener(
      "mouseup",
      () => {
        self.isDown = false;
        slider.classList.remove("active");
      },
      { passive: true }
    );
    slider.addEventListener("mousemove", (e) => {
      if (!self.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - self.startX) * 1; //scroll-fast
      slider.scrollLeft = self.scrollLeft - walk;
    });

    this.item_per_row = window.getComputedStyle(this.$refs.lib).getPropertyValue("--item-per-row");
    window.addEventListener(
      "resize",
      () => {
        if (this.$refs.lib)
          this.item_per_row = window.getComputedStyle(this.$refs.lib).getPropertyValue("--item-per-row");
      },
      { passive: true }
    );
  },
};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply max-w-full;
  @apply py-12;
  /* flex-grow: 1; */
  @apply flex flex-col;
}
.page__container > * {
  @apply pl-4 pr-12;
}

.vibe-card__container {
  overflow: scroll;
  max-width: 65vw;
  @apply py-8;
  @apply flex;
}
.vibe-card__container > * {
  @apply mr-3;
}

.album-library {
  @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6;

  --item-per-row: 2;
  @media (min-width: 1081px) {
    --item-per-row: 4;
  }
  @media (min-width: 1920px) {
    --item-per-row: 6;
  }
}

.album_cover {
  @apply h-full w-full;
  @apply rounded-md border border-opacity-70;
}
.album_title {
  @apply mt-1.5 mb-0.5 md:mb-px lg:-mb-1;
  @apply text-xl md:text-lg lg:text-base font-semibold leading-none md:leading-none lg:leading-none;
}
.album_artist {
  @apply opacity-60;
  @apply text-xl md:text-lg lg:text-base leading-none md:leading-none lg:leading-none;
}
</style>