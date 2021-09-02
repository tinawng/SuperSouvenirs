<template>
  <div class="page__container">
    <h1 class="">Choose Your Mood</h1>
    <div ref="aled" class="vibe-card__container overflow-visible">
      <div class="vibe-card" style="background: linear-gradient(45deg, #fbca88, #ef69ad);">Chill Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(72deg,#F32F8E,#B236D0);">CityPop Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(23deg,#DA1FF2,#4C15D0)">Jazz Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(45deg,#476892,#59355D)">Soul Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(128deg,#C3A8EE,#F5C1EA)">Ghibli Vibes</div>
    </div>
    <!-- <div class="mt-6 flex items-end">
      <h1 class="mr-4 md:mr-8">Recently Played</h1>
      <h1 class="mr-4 md:mr-8 small opacity-20">Playlist</h1>
      <h1 class="mr-4 md:mr-8 small opacity-20">Albums</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-1">
      <img class="rounded h-full w-full" src="/covers/cover1.jpg" alt="" />
      <img class="rounded h-full w-full" src="/covers/cover3.jpg" alt="" />
      <img class="rounded h-full w-full" src="/covers/cover5.jpg" alt="" />
      <img class="rounded h-full w-full" src="/covers/cover6.jpg" alt="" />
      <div>
        <h2 class="-mb-1"><b>Maggot Brain</b></h2>
        <span class="opacity-70">Funkadelic</span>
      </div>
      <div>
        <h2 class="-mb-1"><b>African Rock</b></h2>
        <span class="opacity-70">Akira Ishikawa</span>
      </div>
      <div>
        <h2 class="-mb-1"><b>Black Gold</b></h2>
        <span class="opacity-70">Wu Tang Vs Jimi Hendrix</span>
      </div>
      <div>
        <h2 class="-mb-1"><b>My Favorite Tune</b></h2>
        <span class="opacity-70">Ryo Fukui</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  }),

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
  @apply py-12 portrait:px-12 px-24;
  /* flex-grow: 1; */
  @apply flex flex-col;
}
.page__container > * {
  @apply mb-8;
}

.vibe-card__container {
  overflow: scroll;
  max-width: 100vw;
  /* width: fit-content; */
  @apply flex;
}
.vibe-card__container > * {
  @apply mr-3;
}
.vibe-card {
  @apply h-60 w-52;
  @apply flex-shrink-0;
  @apply rounded-2xl shadow-xl;

  transition: all 0.3s;

  @apply p-4 flex items-end text-brand-secondary text-2xl font-semibold;
}
.vibe-card:hover {
  @apply -mt-2;
  box-shadow: -20px 10px 16px 1px rgb(0 0 0 / 16%);
}
</style>