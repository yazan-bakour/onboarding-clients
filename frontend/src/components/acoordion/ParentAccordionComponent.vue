<script setup lang="ts">
  import { ref, watch } from 'vue';
  import AccordionComponent from './AccordionComponent.vue';
  import StepperComponentVue from '../common/StepperComponent.vue';
  import WizardFormComponent from './WizardFormComponent.vue';
  import { useActiveIndexStore } from '@/stores/useActiveIndexStore';
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore";

  const activeIndexStore = useActiveIndexStore();
  const accordionItemStore = useAccordionItemStore();

  const stepperItems = ref([
    {
      step: 'General data',
    },
    {
      step: 'Personal information',
    },
    {
      step: 'Contact details',
    }
  ])
  
  const accordionItems = accordionItemStore.accordionItems

  const storage = localStorage.getItem('accordionState')
  const storedAccordionItems = storage ? JSON.parse(storage) : null
  
</script>

<template>
  <AccordionComponent :items="accordionItems">
    <div class="flex">
      <StepperComponentVue :stepperItems="stepperItems" :item="accordionItems[activeIndexStore.activeIndex]"> 
        <WizardFormComponent />
      </StepperComponentVue>
    </div>
  </AccordionComponent>
</template>