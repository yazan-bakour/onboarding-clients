<script setup lang="ts">
  import { ref, type PropType } from 'vue';
  import { useActiveIndexStore } from '@/stores/useActiveIndexStore';

  const activeIndexStore = useActiveIndexStore();

  interface AccordionItem {
    id: number,
    title: string;
    formData: any;
  }
  const props = defineProps({
    items: {
      type: Array as PropType<AccordionItem[]>,
      required: true
    },
    activeIndex: Number
  });

  const visibleModals = ref<{ [key: number]: boolean }>({});
  
  const deleteAccordionItem = (items: any[], index: number, id: number) => {
    const itemIndex = items.findIndex(item => item.formData.id === id);

    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);

      delete visibleModals.value[id];
    }
    activeIndexStore.setActiveIndex(index === activeIndexStore.activeIndex ? null : index)
  };
  const toggleSection = (index: number) => {
    activeIndexStore.setActiveIndex(index === activeIndexStore.activeIndex ? null : index)
  };
  const toggleModal = (id: number) => {
    visibleModals.value[id] = !visibleModals.value[id];
  }

</script>

<template>
  <div>
    <div class="mt-6 bg-[#fff] w-[980px] m-auto flex flex-col p-6 shadow-md rounded-md" v-for="(item, index) in props.items" :key="index">
      <div class="flex justify-between">
        <h2 class="font-bold text-lg">{{ item.title }}</h2>
        <div class="flex flex-row items-center">
          <button v-if="index !== 0" class="mr-4 rounded-full border-2 border-solid border-[#f96555] w-6 h-6 flex items-center justify-center" @click="toggleModal(item.id)">
            <!-- <img class="w-2" alt="Delete" src="@/assets/x-solid.svg" /> -->
          </button>
          <button class="rounded-full border-2 border-solid border-[#72b9f6] w-6 h-6 flex items-center justify-center" @click="toggleSection(index)">
            <!-- <img class="w-3" alt="Arrow down" src="@/assets/chevron-down-solid.svg" /> -->
          </button>
          <!-- <ModalComponent v-if="visibleModals[item.formData.id]">
            <div class="mb-6">
              <h1 class="text-[#f96555] text-4xl mb-6 text-center">Look out!</h1>
              <p class="text-[#363636] text-2xl text-center">Are you sure you want to remove {{ item.formData.id }}, as a customer?</p>
            </div>
            <div class="flex flex-col">
              <button class="mb-6 leading-normal font-bold rounded-[24px] border-solid border-2 border-[#128cf4] text-[#128cf4] pt-4 pb-4 mr-3" @click="toggleModal(item.formData.id)" type="button">No, don't delete it</button>
              <button class="leading-normal font-bold rounded-[24px] border-solid border-2 bg-[#f96555] text-[#ffffff] pt-4 pb-4" @click="deleteAccordionItem(items, index, item.formData.id)" type="button">Yes, delete</button>
            </div>
          </ModalComponent> -->
        </div>
        </div>
      <div v-show="index === activeIndexStore.activeIndex">
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>