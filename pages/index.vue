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
    <div class="album-library">
      <img class="rounded h-full w-full" src="/covers/cover1.jpg" alt="" />
      <div style="--curr-pos: 0">
        <h2 class="-mb-1"><b>Maggot Brain</b></h2>
        <span class="opacity-70">Funkadelic</span>
      </div>
      <img class="rounded h-full w-full" src="/covers/cover3.jpg" alt="" />
      <div style="--curr-pos: 1">
        <h2 class="-mb-1"><b>African Rock</b></h2>
        <span class="opacity-70">Akira Ishikawa</span>
      </div>
      <img class="rounded h-full w-full" src="/covers/cover5.jpg" alt="" />
      <div style="--curr-pos: 2">
        <h2 class="-mb-1"><b>Black Gold</b></h2>
        <span class="opacity-70">Wu Tang Vs Jimi Hendrix</span>
      </div>
      <img class="rounded h-full w-full" src="/covers/cover6.jpg" alt="" />
      <div style="--curr-pos: 3">
        <h2 class="-mb-1"><b>My Favorite Tune</b></h2>
        <span class="opacity-70">Ryo Fukui</span>
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

    albums: [],
  }),

  created() {
    this.albums = [
      {
        title: "Maggot Brain",
        artiste_name: "Funkadelic",
        cover: "a1s2d3f4",
        release_year: 1971,
        label: "	Westbound Records",
        genre: ["funk", "soul"],
        mood: 1,
        track_list: [],
        track_notes: [],
        added_on: null,
      },
    ];
  },

  mounted() {
    const slider = this.$refs.aled;

    var self = this;
    slider.addEventListener("mousedown", (e) => {
      self.isDown = true;
      slider.classList.add("active");
      self.startX = e.pageX - slider.offsetLeft;
      self.scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      self.isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      self.isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!self.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - self.startX) * 1; //scroll-fast
      slider.scrollLeft = self.scrollLeft - walk;
      console.log(self.scrollLeft + walk);
      console.log(slider.scrollLeft);
    });
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
  @apply px-20;
}

.vibe-card__container {
  overflow: scroll;
  max-width: 75vw;
  @apply py-8;
  @apply flex;
}
.vibe-card__container > * {
  @apply mr-3;
}

.album-library {
  @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-1;

  --nb-col: 2;
  @media (min-width: 1081px) {
    --nb-col: 4;
  }
  @media (min-width: 1920px) {
    --nb-col: 6;
  }
}

.album-library > div {
  order: calc(var(--nb-col) + var(--curr-pos));
}
</style>