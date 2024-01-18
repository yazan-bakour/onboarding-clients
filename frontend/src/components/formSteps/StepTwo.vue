<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import { countries } from "../helper"
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore";
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import InputComponent from '../common/InputComponent.vue';

  const accordionItemStore = useAccordionItemStore();
  const stepNumberStore = useStepNumberStore()

  const id = ref(0); 
  const existingCustomer = ref('')
  const language = ref('')
  const location = ref('')
  const director = ref('')
  const title = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const birthday = ref('')
  const country = ref('')
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
      existingCustomer.value = formData.existingCustomer
      language.value = formData.language
      location.value = formData.location
      director.value = formData.director
      title.value = formData.title
      firstName.value = formData.firstName
      lastName.value = formData.lastName
      birthday.value = formData.birthday
      country.value = formData.country
      phone.value = formData.phone
      email.value = formData.email
      postcode.value = formData.postcode
      houseNumber.value = formData.houseNumber
      addition.value = formData.addition,
      streetName.value = formData.streetName
      placeName.value = formData.placeName
    }
  })

  const prevStep = () => {
    stepNumberStore.setStepNumber(0)
  }
  const handleSecondStep = () => {
    accordionItemStore.setAccordionItem(id.value, {
      title: firstName.value,
      formData: {
        existingCustomer: existingCustomer.value,
        language: language.value,
        location: location.value,
        director: director.value,
        title: title.value,
        firstName: firstName.value,
        lastName: lastName.value,
        birthday: birthday.value,
        country: country.value,
        phone: phone.value,
        email: email.value,
        postcode: postcode.value,
        houseNumber: houseNumber.value,
        addition: addition.value,
        streetName: streetName.value,
        placeName: placeName.value
      }
    });
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
          <select v-model="title">
            <option>Ms</option>
            <option>Mr</option>
          </select>
        </div>

        <div class="flex-1">
          <h3>First names</h3>
          <input v-model="firstName">
        </div>
      </div>
  
      <div class="w-full mb-2">
        <div>
          <h3>Last name</h3>
          <input v-model="lastName">
        </div>
      </div>

      <div class="w-full mb-2">
        <h3>Date of birth</h3>
        <div class="datepicker relative">
          <input  class="pl-2 pr-2"  type="date" id="birthday" v-model="birthday" />
        </div>
      </div>

      <div>
        <h3>Country of birth</h3>
        <select class="px-2" v-model="country">
          <option v-for="country in countries" :key="country">{{country}}</option>
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