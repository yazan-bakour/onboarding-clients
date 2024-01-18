<script setup lang="ts">

  interface propsTypes {
    inputStyle?: string,
    type: string;
    id?: string,
    value?: string,
    model: string,

    labelStyle?: string,
    labelFor?: string;
    labelValue?: string;
  }
  const props = defineProps<propsTypes>();

</script>
<template>
  <input 
    :class="props.inputStyle" 
    :type="props.type" 
    :id="props.id" 
    :value="props.value" 
    :v-model="props.model"
  />
  <label
    v-if="props.labelValue !== undefined"
    :class="props.labelStyle" 
    :for="props.labelFor"
  >
    {{ props.labelValue }}
  </label>
</template>