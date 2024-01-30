<script setup lang="ts">
  import { useAccordionItemStore } from "@/stores/useAccordionItemStore"
  import { useStepNumberStore } from "@/stores/useStepNumberStore";
  import { ref, watch, computed, onMounted, toRefs, watchEffect } from "vue";
  import { storeToRefs } from "pinia"
  import { useActiveIndexStore } from "@/stores/useActiveIndexStore";
  
  interface AccordionItemState {
    existingCustomer: string;
    language: string;
    location: string;
    director: string;
  }
  
  const accordionItemStore = useAccordionItemStore();
  const stepNumberStore = useStepNumberStore()
  const activeIndexStore = useActiveIndexStore()
  
  const existingCustomer = ref('')
  const language = ref('')
  const location = ref('')
  const director = ref('')

  watchEffect(() => {
    accordionItemStore.accordionItems.forEach((item, index) => {
      if (index === activeIndexStore.activeIndex) {
        existingCustomer.value = item.formData.existingCustomer
        language.value = item.formData.language
        location.value = item.formData.location
        director.value = item.formData.director
      }
    })
  });

  const updateSate = (value: string, stateName: string) => {
    accordionItemStore.updateState(value, stateName);
  }

  const handleFirstStep = () => {
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
          <input name="exist" class="mr-2 radio" type="radio" id="yesCompany" value="Yes" v-model="existingCustomer" @input="updateSate('Yes', 'existingCustomer')">
          <label class="mr-2" for="yesCompany">Yes</label>
        </div>
        <div class="mr-3 radio-parent">
          <input name="exist" class="mr-2 radio" type="radio" id="noCompany" value="No" v-model="existingCustomer" @input="updateSate('No', 'existingCustomer')">
          <label for="noCompany">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Do you speak the english language?</p>
      <p class="mb-2">It is important that we communicate with english language.</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <input name="language" class="mr-2 radio" type="radio" id="yeslegal" value="Yes" v-model="language" @input="updateSate('Yes', 'language')">
          <label for="yeslegal">Yes</label>
        </div>
        <div class="radio-parent">
          <input name="language" class="mr-2 radio" type="radio" id="noLegal" value="No" v-model="language" @input="updateSate('No', 'language')">
          <label for="noLegal">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Do you officially live in the United States?</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <input name="location" class="mr-2 radio" type="radio" id="yesLives" value="Yes" v-model="location" @input="updateSate('Yes', 'location')">
          <label class="mr-2" for="yesLives">Yes</label>
        </div>
        <div class="radio-parent">
          <input name="location" class="mr-2 radio" type="radio" id="noLives" value="No" v-model="location" @input="updateSate('No', 'location')">
          <label class="mr-2" for="noLives">No</label>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-10">
      <p class="font-bold mb-2">Will you be the speaker on behalf of your company and partners?</p>
      <p class="mb-2">At least one person must become a speaker.</p>
      <div class="flex">
        <div class="mr-3 radio-parent">
          <input name="director" class="mr-2 radio" type="radio" id="yesDirector" value="Yes" v-model="director" @input="updateSate('Yes', 'director')">
          <label class="mr-2" for="yesDirector">Yes</label>
        </div>
        <div class="radio-parent">
          <input name="director" class="mr-2 radio" type="radio" id="noDirector" value="No" v-model="director" @input="updateSate('No', 'director')">
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