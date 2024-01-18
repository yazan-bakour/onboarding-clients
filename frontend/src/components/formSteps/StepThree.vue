<script setup lang="ts">
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore";
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import { ref, watchEffect } from 'vue';

  const accordionItemStore = useAccordionItemStore();
  const stepNumberStore = useStepNumberStore();

  const id = ref(0); 
  const phone = ref('')
  const email = ref('')
  const postcode = ref('')
  const houseNumber = ref('')
  const addition = ref('')
  const streetName = ref('')
  const placeName = ref('')

  watchEffect(() => {
    const store = accordionItemStore.state
    const formData = accordionItemStore.state.formData
    if (store.id === id.value) {
      phone.value = formData.phone
      email.value = formData.email
      postcode.value = formData.postcode
      houseNumber.value = formData.houseNumber
      addition.value = formData.addition
      streetName.value = formData.streetName
      placeName.value = formData.placeName
    }
  })

  const initializeNewAccordion = (newId: number) => {
    return {
      id: newId,
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
      placeName: '',
    };
  };
  
  const prevStep = () => {
    stepNumberStore.setStepNumber(1)
  }
  let accordionData = ref(initializeNewAccordion(id.value));

  const createNewAccordion = () => {
    id.value += 1;
    const newAccordionData = initializeNewAccordion(id.value);
    accordionItemStore.setAccordionItem(id.value, {
      title: newAccordionData.title,
      formData: newAccordionData,
    });
    accordionData.value = newAccordionData;
    accordionData = ref(newAccordionData);

  }

  const handleThirdStepYes = () => {
    const formData = accordionItemStore.state.formData  
    accordionItemStore.setAccordionItem(id.value, {
      title: formData.firstName,
      formData: {
        existingCustomer: formData.existingCustomer,
        language: formData.language,
        location: formData.location,
        director: formData.director,
        title: formData.title,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthday: formData.birthday,
        country: formData.country,
        phone: phone.value,
        email: email.value,
        postcode: postcode.value,
        houseNumber: houseNumber.value,
        addition: addition.value,
        streetName: streetName.value,
        placeName: placeName.value
      }
    });
    //Add logic to store the current customer based on id and open new accordion
    console.log('Done');
    createNewAccordion()
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
          <input type="text" v-model="phone" />
        </div>
        <br>
        <div class="w-2/3">
          <h3>E-mail</h3>
          <input type="text" v-model="email" />
        </div>
      </div>

      <div class="mb-5">
        <p class="font-bold mb-2">Official home address</p>
        <p class="mb-4">Provide the official home address.</p>
      </div>

      <div class="w-full flex">
        <div class="mr-5 flex-auto w-7/12">
          <h3>Postal Code</h3>
          <input type="text" v-model="postcode" />
        </div>
        <div class="mr-5 flex-auto w-1/3">
          <h3>House number</h3>
          <input type="text" v-model="houseNumber" />
        </div>
        <div class="flex-auto w-1/3">
          <h3>Addition</h3>
          <input type="text" v-model="addition" />
        </div>
      </div>
      <br>
      <div class="flex flex-row">
        <div class="w-full mr-5">
          <h3>Street name</h3>
          <input type="text" v-model="streetName" />
        </div>
        <div class="w-full">
          <h3>Place name</h3>
          <input type="text" v-model="placeName" />
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