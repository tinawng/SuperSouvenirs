<template>
  <div class="page__container">
    <h1 class="">Choose Your Mood</h1>
    <div class="vibe-card__container">
      <div class="vibe-card" style="background: linear-gradient(45deg, #fbca88, #ef69ad);">Chill Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(72deg,#F32F8E,#B236D0);">CityPop Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(23deg,#DA1FF2,#4C15D0)">Jazz Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(45deg,#476892,#59355D)">Soul Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(128deg,#C3A8EE,#F5C1EA)">Ghibli Vibes</div>
    </div>
    <div class="mt-6 flex items-end">
      <h1 class="mr-8 ">Recently Played</h1>
      <h1 class="mr-8 small opacity-20">Playlist</h1>
      <h1 class="mr-8 small opacity-20">Albums</h1>
    </div>
    <div class="grid grid-cols-3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply py-12 px-16;
  flex-grow: 1;
  @apply flex flex-col;
}
.page__container > * {
  @apply mb-8;
}

.vibe-card__container {
  width: fit-content;
  @apply flex;
}
.vibe-card__container > * {
  @apply mr-3;
}
.vibe-card {
  @apply h-60 w-52;
  @apply rounded-2xl shadow-xl;

  transition: all 0.3s;

  @apply p-4 flex items-end text-brand-secondary text-2xl font-semibold;
}
.vibe-card:hover {
  @apply -mt-2;
  box-shadow: -20px 10px 16px 1px rgb(0 0 0 / 16%);
}
</style>