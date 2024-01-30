<script setup lang="ts">
  import { ref, watchEffect, computed } from 'vue';
  import { countries } from "../helper"
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore";
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import { useActiveIndexStore } from '@/stores/useActiveIndexStore';

  interface AccordionItemState {
    title: string;
    firstName: string;
    lastName: string;
    birthday: string;
    country: string;
  }
  const accordionItemStore = useAccordionItemStore();
  const stepNumberStore = useStepNumberStore();
  const activeIndexStore = useActiveIndexStore()

  const title = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const birthday = ref('')
  const country = ref('')

  watchEffect(() => {
    accordionItemStore.accordionItems.forEach((item, index) => {
      if (index === activeIndexStore.activeIndex) {
        title.value = item.formData.title
        firstName.value = item.formData.firstName
        lastName.value = item.formData.lastName
        birthday.value = item.formData.birthday
        country.value = item.formData.country
      }
    })
  });

  const updateSate = (value: string, stateName: string) => {
    accordionItemStore.updateState(value, stateName);
  }

  const prevStep = () => {
    stepNumberStore.setStepNumber(0)
  }
  const handleSecondStep = () => {
    stepNumberStore.setStepNumber(2);
  };

</script>
<template>
  <div class="mt-2 h-[485px]">
    <button @click="prevStep" class="text-[#128cf4] flex flex-row">
      <!-- <img alt="Arrow" src="@/assets/ui-icon-arrow-left-blue.svg" /> -->
      back
    </button>
    <h2 class="font-bold text-lg mt-4">Personal information</h2>
    <div class="mt-4 mb-10">
      <p class="font-bold mb-2">Official data</p>
      <p class="mb-4">Fill in the details as officially stated on the ID</p>
  
      <div class="flex flex-row w-full">
        <div class="w-40 mr-5 mb-2">
          <h3>Salutation</h3>
          <select v-model="title" @change="updateSate(title, 'title')">
            <option>Ms</option>
            <option>Mr</option>
          </select>
        </div>

        <div class="flex-1">
          <h3>First names</h3>
          <input v-model="firstName" @input="updateSate(firstName, 'firstName')">
        </div>
      </div>
  
      <div class="w-full mb-2">
        <div>
          <h3>Last name</h3>
          <input v-model="lastName" @input="updateSate(lastName, 'lastName')">
        </div>
      </div>

      <div class="w-full mb-2">
        <h3>Date of birth</h3>
        <div class="datepicker relative">
          <input  class="pl-2 pr-2"  type="date" id="birthday" v-model="birthday" @input="updateSate(birthday, 'birthday')" />
        </div>
      </div>

      <div>
        <h3>Country of birth</h3>
        <select class="px-2" v-model="country" @change="updateSate(country, 'country')" @input="updateSate(country, 'country')">
          <option v-for="country in countries" :key="country" >{{country}}</option>
        </select>
      </div>
    </div>
  </div>
  <div>
    <div class="bottom-0 mt-6">
      <button @click="handleSecondStep" type="button" class="leading-normal font-bold rounded-[24px] border-solid border-2 cta py-2 px-6">
        Contact details
      </button>
    </div>
  </div>
</template>