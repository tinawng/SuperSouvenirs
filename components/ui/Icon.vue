<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g v-if="!variant || variant == 'play'">
      <polygon points="7 3 21 12 7 21 7 3"></polygon>
    </g>
    <g v-else-if="variant == 'plus'">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </g>
    <g v-else-if="variant == 'more'">
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </g>
    <g v-else-if="variant == 'previous'">
      <line x1="19" y1="20" x2="9" y2="12"></line>
      <line x1="9" y1="12" x2="19" y2="4"></line>
      <line x1="5" y1="19" x2="5" y2="5"></line>
    </g>
    <g v-else-if="variant == 'next'">
      <line x1="5" y1="4" x2="15" y2="12"></line>
      <line x1="15" y1="12" x2="5" y2="20"></line>
      <line x1="19" y1="5" x2="19" y2="19"></line>
    </g>
    <g v-else-if="variant == 'pause'">
      <line x1="7" y1="4" x2="7" y2="20"></line>
      <line x1="17" y1="4" x2="17" y2="20"></line>
    </g>
    <g v-else-if="variant == 'shuffle'">
      <polyline points="16 3 21 3 21 8"></polyline>
      <line x1="4" y1="20" x2="21" y2="3"></line>
      <polyline points="21 16 21 21 16 21"></polyline>
      <line x1="15" y1="15" x2="21" y2="21"></line>
      <line x1="4" y1="4" x2="9" y2="9"></line>
    </g>
    <g v-else-if="variant == 'repeat'">
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    </g>
    <g v-else-if="variant == 'list'">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </g>
    <g v-else-if="variant == 'volume'">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </g>
    <g v-else-if="variant == 'dot'">
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    variant: String,
    size: {
      type: Number,
      default: 24,
    },
    stroke: {
      type: Number,
      default: 1.5,
    },
  },
};
</script>

<style lang="postcss">
</style>