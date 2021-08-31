<template>
  <div class="page__container" :style="css_vars">

    <div v-if="left_panel === 'flow'" class="max-w-sm w-full justify-self-end">
      <h3 class="px-1.5 text-right bg-brand-primary text-brand-secondary"><b>CURRENT FLOW</b></h3>
      <div class="mt-4 px-2 flex justify-between items-center">
        <h4>CHILL</h4>
        <ui-selector />
        <h4>FUNKY</h4>
      </div>
      <div class="mt-4 px-2 flex justify-between items-center">
        <h4 class="h-4.5 text-center rounded-md px-2 py-0.5 w-20 bg-brand-primary text-brand-secondary">CITY POP</h4>
        <h4 class="h-4.5 text-center rounded-md px-2 py-0.5 w-20 border border-brand-primary">SOUL</h4>
        <h4 class="h-4.5 text-center rounded-md px-2 py-0.5 w-20 bg-brand-primary text-brand-secondary">JAZZ</h4>
        <h4 class="h-4.5 text-center rounded-md px-2 py-0.5 w-20 border border-brand-primary">FUSION</h4>
      </div>
    </div>
    <div v-else-if="left_panel === 'queue'" class="max-w-sm w-full justify-self-end">
      <h3 class="px-1.5 text-right bg-brand-primary text-brand-secondary"><b>QUEUE</b></h3>
      <h4> 01. Take Me 4:53</h4>
    </div>

    <div class="relative justify-self-center">
      <div class="cover__container">
        <img class="h-full" src="/covers/cover7.jpg" alt="" />
        <img class="cover_wear" src="/covers/wear.png" alt="" />
      </div>
      <div class="ply">
        <ui-progress-bar />
        <ui-player class="mt-4" />
      </div>
    </div>

    <div class="flex flex-col justify-around h-full" @click="changeTitle">
      <div></div>
      
      <div>
        <div class="pb-1.5 overflow-hidden">
          <transition name="slide-in" mode="out-in">
            <h1 :key="artist">{{artist}}</h1>
          </transition>
        </div>

        <div class="overflow-hidden">
          <transition name="slide-in" mode="out-in">
            <h2 :key="title">{{title}}</h2>
          </transition>
        </div>
      </div>

      <div class="overflow-hidden">
        <transition name="slide-in" mode="out-in">
          <h4>1982 <b class="mx-0.5">·</b> LABEL ALFA <b class="mx-0.5">·</b> FLAC 16/44.1kHz</h4>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    artist: "Casiopea",
    title: "Asayake",

    cover_wear_scale: 1,
    cover_wear_angle: 0,

    left_panel: "queue" // ['flow', 'playlist']
  }),
  computed: {
    css_vars: function () {
      let css_vars = "";

      // Cover wear
      css_vars += `--cover-wear-scale: ${this.cover_wear_scale};`;
      css_vars += `--cover-wear-angle: ${this.cover_wear_angle}deg;`;

      return css_vars;
    },
  },

  created() {
    this.cover_wear_scale = 1 + Math.random() / 3;
    this.cover_wear_angle = Math.floor(Math.random() * 4) * 90;
  },

  methods: {
    changeTitle() {
      this.artist = this.artist == "Casiopea" ? "Ryo Fukui" : "Casiopea";
      this.title = this.title == "Asayake" ? "I Want To Talk About You" : "Asayake";
    },
  },
};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply grid grid-cols-3 items-center;
  grid-template-rows: calc(100vh - 256px) 128px;
}

.nav__container {
  @apply h-60;
  @apply my-auto pl-12;
  @apply flex flex-col justify-evenly;
  @apply uppercase;
}

.cover__container {
  @apply relative;
  @apply h-96 w-96;
  @apply overflow-hidden;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.24),
    0 6px 30px 5px rgba(0, 0, 0, 0.24);
  /* box-shadow: 0 11px 15px -7px rgba(48, 48, 48, 0.6), 0 24px 38px 3px rgba(48, 48, 48, 0.36),
    0 9px 46px 8px rgba(0, 0, 0, 0.12); */
  /* box-shadow: 0 11px 10px -7px rgba(48, 48, 48, 0.6), 0 16px 38px 3px rgba(48, 48, 48, 0.36),
    0 9px 30px 8px rgba(0, 0, 0, 0.12); */
}
.cover_wear {
  @apply absolute top-0 left-0;
  @apply h-full;
  @apply opacity-90;
  transform: rotate(var(--cover-wear-angle)) scaleX(var(--cover-wear-scale)) scaleY(var(--cover-wear-scale));
}

.ply {
  @apply absolute;
  top: calc(100% + 2.25rem);
  @apply w-full;
}
</style>
