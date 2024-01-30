<script setup lang="ts">
  import StepOne from '../formSteps/StepOne.vue';
  import StepThree from '../formSteps/StepThree.vue';
  import StepTwo from '../formSteps/StepTwo.vue';

  interface propsTypes {
    item: any,
  }
  const props = defineProps<propsTypes>();

</script>

<template>
  <div class="flex w-2/3">
    <form>
      <div v-if="props.item?.formData.stepNumber === 0">
        <StepOne />
      </div>
      <div v-if="props.item?.formData.stepNumber === 1">
        <StepTwo />
      </div>
      <div v-if="props.item?.formData.stepNumber === 2">
        <StepThree />
      </div>
    </form>
  </div>
</template>