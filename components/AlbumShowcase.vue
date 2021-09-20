<template>
  <div class="container" ref="container" :style="css_vars">
    <div class="relative flex flex-shrink-0" :class="[backward ? 'anim_backward' : 'anim']">
      <img v-for="i in 8" :key="i" class="cover" :src="`/covers/cover${i-1}.jpg`" alt="cover" />
    </div>
    <div class="relative flex flex-shrink-0" :class="[backward ? 'anim_backward' : 'anim']">
      <img v-for="i in 8" :key="i" class="cover" :src="`/covers/cover${i-1}.jpg`" alt="cover" />
    </div>
    <div class="absolute h-44 w-4 left-0 " style="background: linear-gradient(90deg, #F3F3F3 0%, #0000 100%);"></div>
    <div class="absolute h-44 w-4 right-0" style="background: linear-gradient(270deg, #F3F3F3 0%, #0000 100%);"></div>
  </div>
</template>

<script>
export default {
  props: {
    backward: Boolean,
  },

  computed: {
    css_vars() {
      return "--cover_size: 10rem; --cover_margin: 1rem;";
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply relative;
  @apply flex overflow-scroll;
  filter: grayscale(0.75);
}

.anim {
  animation: 42s linear 0s infinite slide-right;
}

.anim_backward {
  animation: 42s linear 0s infinite slide-left;
}

.cover {
  @apply rounded-lg;

  height: var(--cover_size);
  width: var(--cover_size);
  margin-right: var(--cover_margin);
}

@keyframes slide-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>