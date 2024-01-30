import { ref, computed, watch, onMounted, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import {useActiveIndexStore} from './useActiveIndexStore'

interface AccordionItemState {
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
}

interface AccordionItem {
  id: number,
  title: string;
  formData: AccordionItemState;
}

export const useAccordionItemStore = defineStore('accordionItem', () => {
  const activeIndexStore = useActiveIndexStore()
  const storage = localStorage.getItem('accordionState')
  const storedAccordionItems = storage ? JSON.parse(storage) : null

  const accordionItems = ref<AccordionItem[]>(
    storedAccordionItems ? storedAccordionItems.accordions :
    [
      {
        id: 0,
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
          placeName: '',
        },
      }
    ]
  );

  const updateState = (event: string, sateName: string) => {
    accordionItems.value.forEach((item, index) => {
      if (index !== activeIndexStore.activeIndex) {
        return null
      }
      switch (sateName) {
        case 'existingCustomer':
          return item.formData.existingCustomer = event
        case 'language':
          return item.formData.language = event
        case 'location':
          return item.formData.location = event
        case 'director':
          return item.formData.director = event
        case 'title':
          return item.formData.title = event
        case 'firstName':
          return item.formData.firstName = event
        case 'lastName':
          return item.formData.lastName = event
        case 'birthday':
          return item.formData.birthday = event
        case 'country':
          return item.formData.country = event
        case 'phone':
          return item.formData.phone = event
        case 'email':
          return item.formData.email = event
        case 'postcode':
          return item.formData.postcode = event
        case 'houseNumber':
          return item.formData.houseNumber = event
        case 'addition':
          return item.formData.addition = event
        case 'streetName':
          return item.formData.streetName = event
        case 'placeName':
          return item.formData.placeName = event
        default:
          return ''
      }

    })
  }

  const updateFormData = (index: number, formData: AccordionItemState) => {
    accordionItems.value[index].formData = formData;
  };

  const createNewAccordionItem = () => {
    const index = accordionItems.value.length;
    const newAccordionItem: AccordionItem = {
      id: index,
      title: `Customer ${index + 1}`,
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
    };
    accordionItems.value.push(newAccordionItem);

    activeIndexStore.setActiveIndex(index);
  };

  watch([accordionItems, activeIndexStore.activeIndex], () => {
    const state = {
      activeIndex: activeIndexStore.activeIndex,
      accordions: accordionItems.value.map((item, index) => {
        return item
      })
    };
    localStorage.setItem('accordionState', JSON.stringify(state));
  }, { deep: true });

  return {
    // state,
    updateState,
    // setAccordionItems,
    accordionItems: computed(() => accordionItems.value),
    createNewAccordionItem,
    updateFormData
  };
});
