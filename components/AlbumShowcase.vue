<template>
  <div class="showcase_container" :style="css_vars">
    <div class="relative flex flex-shrink-0" :class="[backward ? 'anim_backward' : 'anim']">
      <img v-for="i in 8" :key="i" class="cover" :src="`/covers/cover${i-1}.jpg`" alt="cover" />
    </div>
    <div class="relative flex flex-shrink-0" :class="[backward ? 'anim_backward' : 'anim']">
      <img v-for="i in 8" :key="i" class="cover" :src="`/covers/cover${i-1}.jpg`" alt="cover" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backward: Boolean,
  },

  computed: {
    css_vars() {
      return "--cover_size: 14rem; --cover_margin: 1rem;";
    },
  },
};
</script>

<style lang="postcss" scoped>
.showcase_container {
  @apply relative;
  @apply flex overflow-scroll;
  filter: grayscale(1);
}

.anim {
  animation: 120s linear 0s infinite slide-right;
}

.anim_backward {
  animation: 120s linear 0s infinite slide-left;
}

.cover {
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