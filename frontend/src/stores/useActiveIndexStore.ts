import { defineStore } from 'pinia';

interface ActiveIndexState {
  activeIndex: number;
}

export const useActiveIndexStore = defineStore('activeIndex', {
  state: (): ActiveIndexState => ({
    activeIndex: 0,
  }),
  actions: {
    setActiveIndex(index: number | null) {
      this.$state.activeIndex = index;
    },
  },
});