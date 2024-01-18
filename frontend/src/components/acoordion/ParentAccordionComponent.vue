<script setup lang="ts">
  import { ref } from 'vue';
  import AccordionComponent from './AccordionComponent.vue';
  import StepperComponentVue from '../common/StepperComponent.vue';
  import WizardFormComponent from './WizardFormComponent.vue';
  import { useActiveIndexStore } from '@/stores/useActiveIndexStore';

  const activeIndexStore = useActiveIndexStore();

  interface AccordionItem {
    title: string;
    formData: any;
  }

  const accordionItems = ref<AccordionItem[]>([
    {
      title: 'Customer 1',
      formData: {
        existingCustomer: '',
        language: '',
        location: '',
        director: '',
        title: '',
        firstName: '',
        lastName: '',
        birthday: '',
        country: '',
        phone: '',
        email: '',
        postcode: '',
        houseNumber: '',
        addition: '',
        streetName: '',
        placeName: ''
      } 
    }
  ]);
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