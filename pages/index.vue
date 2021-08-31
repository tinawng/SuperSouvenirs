<template>
  <div class="page__container">
    <h1>Choose Your Mood</h1>
    <div class="vibe-card__container">
      <div class="vibe-card" style="background: linear-gradient(45deg, #fbca88, #ef69ad);">Chill Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(45deg,#F32F8E,#B236D0);">CityPop Vibes</div>
      <div class="vibe-card" style="background: linear-gradient(45deg,#DA1FF2,#4C15D0)">Jazz Vibes</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply p-12;
  flex-grow: 2;
  @apply flex flex-col;
}
.page__container > * {
  @apply mb-4;
}

.vibe-card__container {
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