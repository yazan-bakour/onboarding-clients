<script setup lang="ts">
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore";
  import { useActiveIndexStore } from "@/stores/useActiveIndexStore";
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import { ref, watchEffect } from 'vue';

  interface AccordionItemState {
    phone: string;
    email: string;
    postcode: string;
    houseNumber: string;
    addition: string;
    streetName: string;
    placeName: string;
  }
  const accordionItemStore = useAccordionItemStore();
  const stepNumberStore = useStepNumberStore();
  const activeIndexStore = useActiveIndexStore()

  const phone = ref('')
  const email = ref('')
  const postcode = ref('')
  const houseNumber = ref('')
  const addition = ref('')
  const streetName = ref('')
  const placeName = ref('')

  watchEffect(() => {
    accordionItemStore.accordionItems.forEach((item, index) => {
      if (index === activeIndexStore.activeIndex) {
        phone.value = item.formData.phone
        email.value = item.formData.email
        postcode.value = item.formData.postcode
        houseNumber.value = item.formData.houseNumber
        addition.value = item.formData.addition
        streetName.value = item.formData.streetName
        placeName.value = item.formData.placeName
      }
    })
  });

  const updateSate = (value: string, stateName: string) => {
    accordionItemStore.updateState(value, stateName);
  }
  
  const prevStep = () => {
    stepNumberStore.setStepNumber(1)
  }

  const handleThirdStepYes = () => {
    return accordionItemStore.createNewAccordionItem()

  };
  const handleThirdStepNo = () => {}

</script>

<template>
  <div class="mt-2 h-[485px]">
    <button @click="prevStep" class="text-[#128cf4] flex flex-row">
      <!-- <img alt="Arrow" src="@/assets/ui-icon-arrow-left-blue.svg" /> -->
      back
    </button>
    <h2 class="font-bold text-lg mt-4">Contact details</h2>
    <div class="mt-5 mb-10">
      <div class="flex flex-row w-full mb-6">
        <div class="w-1/3 mr-5">
          <h3>phone number</h3>
          <input type="text" v-model="phone" @input="updateSate(phone, 'phone')" />
        </div>
        <br>
        <div class="w-2/3">
          <h3>E-mail</h3>
          <input type="text" v-model="email" @input="updateSate(email, 'email')" />
        </div>
      </div>

      <div class="mb-5">
        <p class="font-bold mb-2">Official home address</p>
        <p class="mb-4">Provide the official home address.</p>
      </div>

      <div class="w-full flex">
        <div class="mr-5 flex-auto w-7/12">
          <h3>Postal Code</h3>
          <input type="text" v-model="postcode" @input="updateSate(postcode, 'postcode')" />
        </div>
        <div class="mr-5 flex-auto w-1/3">
          <h3>House number</h3>
          <input type="text" v-model="houseNumber" @input="updateSate(houseNumber, 'houseNumber')" />
        </div>
        <div class="flex-auto w-1/3">
          <h3>Addition</h3>
          <input type="text" v-model="addition" @input="updateSate(addition, 'addition')" />
        </div>
      </div>
      <br>
      <div class="flex flex-row">
        <div class="w-full mr-5">
          <h3>Street name</h3>
          <input type="text" v-model="streetName" @input="updateSate(streetName, 'streetName')" />
        </div>
        <div class="w-full">
          <h3>Place name</h3>
          <input type="text" v-model="placeName" @input="updateSate(placeName, 'placeName')" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <p class="text-[18px] font-bold mb-4">Would you like to add another customer?</p>
    <div class="flex flex-row">
      <button @click="handleThirdStepYes" type="button" class="leading-normal font-bold rounded-[24px] border-solid border-2 border-[#2cc164] text-[#2cc164] py-2 px-6 mr-3">
        Yes
      </button>
      <button @click="handleThirdStepNo" type="button" class="leading-normal font-bold rounded-[24px] border-solid border-2 border-[#f96555] text-[#f96555] py-2 px-6">
        No
      </button>
    </div>
  </div>
</template>