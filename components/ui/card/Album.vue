<template>
  <div class="w-full h-full">
      <img class="rounded w-full" :src="src" alt="" />
      <div>
          <slot />
      </div>
  </div>
</template>

<script>
export default {
    props: ["src"]
}
</script>

<style lang="postcss" scoped>

</style>