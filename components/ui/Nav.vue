<template>
  <div class="nav__container">
    <div class="flex items-center">
      <ui-icon :size="32" />
      <span class="-mt-0.5 ml-3.5 text-xl font-black">Super Souvenirs</span>
    </div>
    <div class="max-w-xs w-1/4 flex justify-between items-center text-xs font-bold">
      <NuxtLink to="/">
        <span class="flex items-center">
          <ui-icon
            class="transition-opacity"
            :class="[$route.name === 'index' ? 'opacity-100' : 'opacity-0']"
            variant="dot"
          />
          flow
        </span>
      </NuxtLink>
      <span class="flex items-center transition-opacity">
        <ui-icon
          class="transition-opacity"
          :class="[$route.name === 'playlists' ? 'opacity-100' : 'opacity-0']"
          variant="dot"
        />
        playlists
      </span>
      <NuxtLink to="/albums">
        <span class="flex items-center transition-opacity">
          <ui-icon
            class="transition-opacity"
            :class="[$route.name === 'albums' ? 'opacity-100' : 'opacity-0']"
            variant="dot"
          />
          albums
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style lang="postcss" scoped>
.nav__container {
  @apply h-32;
  @apply px-12;
  @apply flex justify-between items-center;
  @apply uppercase;
}
</style>