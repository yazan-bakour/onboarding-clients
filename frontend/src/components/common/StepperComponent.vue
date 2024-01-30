<script setup lang="ts">

  interface propsTypes {
    stepperItems: any,
    item: any,
  }
  const props = defineProps<propsTypes>();
</script>

<template v-slot:default="{ item }">
  <div class="w-1/3 mb-4 mr-4 mt-4">
    <div class="leading-loose" v-for="(step, index) in props.stepperItems" :key="step.step">
      <p v-bind:class="(index === item?.formData.stepNumber) ? 'font-bold' : ''">{{ step.step }}</p>
    </div>
  </div>
  <slot />
</template>