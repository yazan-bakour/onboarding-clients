<script setup lang="ts">
  import Header from "../HeaderComponent.vue"
</script>

<template>
  <div class="main-background">
    <Header />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
  .main-background {
    background-color: var(--color-background-soft);
    height: 100%;
  }
</style>