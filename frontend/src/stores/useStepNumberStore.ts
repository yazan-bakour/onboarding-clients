import { defineStore } from 'pinia';

interface StepNumberState {
  stepNumber: number;
}

export const useStepNumberStore = defineStore('stepNumber', {
  state: (): StepNumberState => ({
    stepNumber: 0,
  }),
  actions: {
    setStepNumber(newStep: number) {
      this.$state.stepNumber = newStep;
    },
  },
});