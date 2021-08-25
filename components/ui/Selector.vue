<template>
  <div class="w-full flex justify-evenly items-center">
    <div v-for="i in 5" :key="i" class="items" @click="setValue(i)">
      <ui-icon
        class="transform transition-transform"
        variant="dot"
        :size="34"
        :style="`--tw-scale-x: ${items_sizes[i-1]}; --tw-scale-y: ${items_sizes[i-1]};`"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: false,
    items_sizes: [1.2, 1.2, 1.2, 0.5, 0.5],
  }),
  methods: {
    setValue(i) {
      this.items_sizes = this.items_sizes.map((x, index) => (index < i ? 1.2 : 0.5));
    },
  },
};
</script>

<style lang="postcss" scoped>
.items {
  @apply h-8 w-8;
  @apply flex justify-center items-center;
  @apply bg-brand-primary bg-opacity-0 rounded-full;
  @apply transition-colors;
}
.items:hover {
  @apply bg-opacity-20;
}
</style>