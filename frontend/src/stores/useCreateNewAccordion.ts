import { defineStore } from 'pinia';

interface NewAcoordion {
  newAccordion: number;
}

export const useNewAccordion = defineStore('newAccordion', {
  state: (): NewAcoordion => ({
    newAccordion: 0,
  }),
  actions: {
    setnewAccordion(newStep: number) {
      this.$state.newAccordion = newStep;
    },
  },
});