<template>
  <div class="w-full">
    <section class="pt-6 flex justify-between items-center">
      <span class="opacity-0 text-lg font-black" style="font-family: 'Helvetica Now Display';">SUPER SOUVENIR</span>
      <div class="flex justify-between" style="min-width: 25%">
        <a class="font-semibold">ALBUMS</a>
        <a class="ml-6 font-semibold">PLAYLIST</a>
        <a class="ml-6 font-semibold">FLOW</a>
      </div>
    </section>
    <section class="h-12 border-b border-current" />
    <section class="hero_section">
      <span class="hero__title">Super<br />Souvenirs</span>
      <div class="flex flex-col justify-around text-brand-primary-light">
        <div>
          <h3>You′ll hear these <i>rare gems</i></h3>
          <h3>Plus other スーパーお<span class="font-thin">土産</span></h3>
          <h3>from radio's world of commercials</h3>
        </div>
        <div>
          <h3>See how many you can remember</h3>
          <h3>I′ll bet you'll be surprised,</h3>
          <h3>and delighted!</h3>
        </div>
      </div>
      <div class="text-right">
        <span class="a_underlined text-lg font-medium" @click="openModal('album')">View All Albums</span>
      </div>
    </section>
    <div class="mt-24">
      <album-showcase />
      <album-showcase class="mt-4" backward />
    </div>
  </div>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default { mixins: [modal] };
</script>

<style lang="postcss" scoped>
section {
  @apply max-w-7xl;
  @apply mx-auto px-4;
}

.hero_section {
  @apply pt-6;
  @apply grid;
  grid-template-columns: 42% 25% 33%;
}
.hero__title {
  font-family: "Helvetica Now Display";
  @apply text-8xl font-extrabold;
}
</style>