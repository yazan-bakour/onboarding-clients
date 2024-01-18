import { ref } from 'vue'
import { defineStore } from 'pinia'

interface AccordionItem {
  id: number;
  title: string;
  formData: {
    existingCustomer: string;
    language: string;
    location: string;
    director: string;
    title: string;
    firstName: string;
    lastName: string;
    birthday: string;
    country: string;
    phone: string;
    email: string;
    postcode: string;
    houseNumber: string;
    addition: string;
    streetName: string;
    placeName: string;
  };
}

export const useAccordionItemStore = defineStore('accordionItem', () => {
  const state = ref<AccordionItem>({
    id: 0,
    title: '',
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
      placeName: '',
    },
  });

  const setAccordionItem = (id: number, update: Partial<AccordionItem>) => {
    const prevItem = state.value;
    if (id === prevItem.id) {
      state.value = { ...state.value, ...update };
    }
  };

  return {
    state,
    setAccordionItem,
  };
});