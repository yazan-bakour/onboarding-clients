<script setup lang="ts">
  import { useStepNumberStore } from '@/stores/useStepNumberStore';


  interface propsTypes {
    //Change the any to object
    stepperItems: any,
    item: any,
  }
  const props = defineProps<propsTypes>();
  
  const stepNumberStore = useStepNumberStore();
</script>

<template v-slot:default="{ item }">
  <div class="w-1/3 mb-4 mr-4 mt-4">
    <div class="leading-loose" v-for="(step, index) in props.stepperItems" :key="step.step">
      <p v-bind:class="(index === stepNumberStore.stepNumber || 0) ? 'font-bold' : ''">{{ step.step }}</p>
    </div>
  </div>
  <slot />
</template>