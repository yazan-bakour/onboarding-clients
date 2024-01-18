<script setup lang="ts">
  import StepOne from '../formSteps/StepOne.vue';
  import StepThree from '../formSteps/StepThree.vue';
  import StepTwo from '../formSteps/StepTwo.vue';
  import { useStepNumberStore } from "@/stores/useStepNumberStore";

  const stepNumberStore = useStepNumberStore()
  console.log("Current Step Number:", stepNumberStore.stepNumber);
</script>

<template>
  <div class="flex w-2/3">
    <form>
      <div v-if="stepNumberStore.stepNumber === 0">
        <StepOne />
      </div>
      <div v-if="stepNumberStore.stepNumber === 1">
        <StepTwo />
      </div>
      <div v-if="stepNumberStore.stepNumber === 2">
        <StepThree />
      </div>
    </form>
  </div>
</template>