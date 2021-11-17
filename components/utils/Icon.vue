<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g v-if="!variant || variant == 'icon'">
      <path
        fill="currentColor"
        stroke="transparent"
        d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z"
      />
    </g>
    <g v-else-if="!variant || variant == 'play'">
      <polygon fill="currentColor" points="7 3 21 12 7 21 7 3"></polygon>
    </g>
    <g v-else-if="!variant || variant == 'pause'">
      <rect fill="currentColor" stroke="transparent" x="6" y="4" width="4" height="16"></rect>
      <rect fill="currentColor" stroke="transparent" x="14" y="4" width="4" height="16"></rect>
    </g>
    <g v-else-if="variant == 'next'">
      <polyline points="9 18 15 12 9 6"></polyline>
    </g>
    <g v-else-if="variant == 'skip'">
      <polyline points="9 18 15 12 9 6"></polyline>
      <line x1="18" y1="6" x2="18" y2="18"></line>
    </g>
    <g v-else-if="variant == 'previous'">
      <polyline points="15 18 9 12 15 6" />
    </g>
    <g v-else-if="variant == 'up'">
      <polyline points="18 15 12 9 6 15"></polyline>
    </g>
    <g v-else-if="variant == 'down'">
      <polyline points="6 9 12 15 18 9"></polyline>
    </g>
    <g v-else-if="variant == 'dot'">
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
    </g>
    <g v-else-if="variant == 'more'">
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </g>
    <g v-else-if="variant == 'plus'">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </g>
    <g v-else-if="variant == 'magnify'">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </g>
    <g v-else-if="variant == 'bookmark'">
      <path fill="currentColor" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </g>
    <g v-else-if="variant == 'bookmark-outlined'">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </g>
    <g v-else-if="variant == 'disc'">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="3"></circle>
    </g>
    <g v-else-if="variant == 'grid'">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    variant: String,
    stroke: {
      type: Number,
      default: 1.5,
    },
  },
};
</script>

<style lang="postcss">
</style>