<template>
  <div class="data_table__container">
    <div class="data_table__header">
      <div v-for="header in headers" :key="header">
        <h4>{{ header }}</h4>
      </div>
    </div>
    <div class="data_table__row" v-for="(data, index) in top_tracks" :key="index" :ref="`table-row-${index}`">
      <h4>{{index+1}}</h4>
      <div class="flex items-center gap-4">
        <img class="w-10 rounded-sm shadow-lg" src="/covers/tatsu0.jpg" />
        <h3 class="font-medium">{{ data.title }}</h3>
      </div>
      <h4>{{data.album}}</h4>
      <div class="flex items-center gap-0.5">
        <utils-icon class="w-3 pb-0.5 text-red" variant="bookmark" />
        <h4>{{data.bookmark}}</h4>
      </div>
      <h4>{{data.duration}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: ["#", "Title", "Album", "Popularity", "Duration"],
    top_tracks: [
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
      {
        title: "Love Space",
        album: "Spacy",
        duration: "3:05",
        bookmark: "10538",
      },
    ],
  }),

  methods: {
    getRowsDOMElementsList() {
      var dom_elements_list = [];
      for (const ref in this.$refs) {
        dom_elements_list.push(this.$refs[ref][0]);
      }
      return dom_elements_list;
    },
    selectRow(index) {
      this.getRowsDOMElementsList().forEach((el) => {
        el.classList.remove("data_table__row_selected");
      });
      this.$refs[`table-row-${index}`][0].classList.add("data_table__row_selected");
    },
    openModal() {
      this.$nuxt.$emit("modal-open");
    },
  },
};
</script>

<style lang="postcss" scoped>
.data_table__header {
  @apply py-2;
  @apply grid;
  grid-template-columns: 2rem 60% 1fr 1fr 1fr;
  @apply border-b border-gray border-opacity-60;
}
.data_table__header > * {
  @apply px-4;
}

.data_table__row {
  @apply py-2;
  @apply grid items-center;
  grid-template-columns: 2rem 60% 1fr 1fr 1fr;
  @apply border-b border-gray border-opacity-60;
  @apply cursor-pointer;

  @apply bg-white;
  @apply transition-colors;
  background-image: linear-gradient(90deg, #ffff 0%, rgba(245, 245, 245, 0) 50%, #ffff 100%);
}
.data_table__row:hover,
.data_table__row_selected {
  @apply bg-light;
}
.data_table__row > * {
  @apply px-4;
}

.data_table__row__pp {
  @apply mr-3;
  @apply h-6 w-6 rounded-full;
}
.data_table__row__pill {
  @apply py-2 px-3;
  @apply rounded-full bg-light;
  @apply text-sm;
  @apply capitalize;
  @apply transition-colors;
}
.data_table__row:hover .data_table__row__pill,
.data_table__row_selected .data_table__row__pill {
  @apply bg-dark text-light;
}
.data_table__row_hide {
  @apply opacity-0;
}
</style>