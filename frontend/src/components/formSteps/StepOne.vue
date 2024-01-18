<script setup lang="ts">
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore"
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import { ref, watchEffect } from "vue";
  
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
      addition.value = formData.addition
      streetName.value = formData.streetName
      placeName.value = formData.placeName
    }
  })

  const handleFirstStep = () => {
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
    stepNumberStore.setStepNumber(1);
  };

</script>

<template>
  <!-- <div v-if="firstStepError" class="absolute top-[89px] left-0 bg-[#f96555] text-[#fff] w-full py-3 text-center font-bold">Please complete all the radio inputs for General data</div> -->

  <div class="h-[555px]">
    <h2 class="font-bold text-lg mt-4">General data</h2>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Will you become our future client for our company?</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="yesCompany" value="Yes" :model="existingCustomer" labelStyle="mr-2" labelFor="yesCompany" labelValue="Yes" /> -->
          <input class="mr-2 radio" type="radio" id="yesCompany" value="Yes" v-model="existingCustomer">
          <label class="mr-2" for="yesCompany">Yes</label>
        </div>
        <div class="mr-3 radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="noCompany" value="No" :model="existingCustomer" labelStyle="mr-2" labelFor="noCompany" labelValue="No" /> -->
          <input class="mr-2 radio" type="radio" id="noCompany" value="No" v-model="existingCustomer">
          <label for="noCompany">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Do you speak the english language?</p>
      <p class="mb-2">It is important that we communicate with english language.</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="yeslegal" value="Yes" :model="language" labelStyle="mr-2" labelFor="yeslegal" labelValue="Yes" /> -->
          <input class="mr-2 radio" type="radio" id="yeslegal" value="Yes" v-model="language">
          <label for="yeslegal">Yes</label>
        </div>
        <div class="radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="noLegal" value="No" :model="language" labelStyle="mr-2" labelFor="noLegal" labelValue="No" /> -->
          <input class="mr-2 radio" type="radio" id="noLegal" value="No" v-model="language">
          <label for="noLegal">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Do you officially live in the United States?</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="yesLives" value="Yes" :model="location" labelStyle="mr-2" labelFor="yesLives" labelValue="Yes" /> -->
          <input class="mr-2 radio" type="radio" id="yesLives" value="Yes" v-model="location">
          <label class="mr-2" for="yesLives">Yes</label>
        </div>
        <div class="radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="noLives" value="No" :model="location" labelStyle="mr-2" labelFor="noLives" labelValue="No" /> -->
          <input class="mr-2 radio" type="radio" id="noLives" value="No" v-model="location">
          <label class="mr-2" for="noLives">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Will you be the speaker on behalf of your company and partners?</p>
      <p class="mb-2">At least one person must become a speaker.</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="yesDirector" value="Yes" :model="director" labelStyle="mr-2" labelFor="yesDirector" labelValue="Yes" /> -->
          <input class="mr-2 radio" type="radio" id="yesDirector" value="Yes" v-model="director">
          <label class="mr-2" for="yesDirector">Yes</label>
        </div>
        <div class="radio-parent">
          <!-- <InputComponent inputStyle="mr-2 radio" type="radio" id="noDirector" value="No" :model="director" labelStyle="mr-2" labelFor="noDirector" labelValue="No" /> -->
          <input class="mr-2 radio" type="radio" id="noDirector" value="No" v-model="director">
          <label class="mr-2" for="noDirector">No</label>
        </div>
      </div>
    </div>

    <div class="bottom-0 mt-6">
      <button @click="handleFirstStep" type="button" class="leading-normal font-bold rounded-[24px] border-solid border-2 cta py-2 px-6">
        Personal information
      </button>
    </div>
  </div>
</template>

<style>
.radio-parent {
  display: flex;
  align-items: center;
}
.radio {
  width: 16px;
  height: 16px;
  /* accent-color: #2cc164; */
}
/* input[type='radio'] {
  accent-color: #2cc164;
} */
/* input[type='radio']:after {
  accent-color: #2cc164;
} */
</style>