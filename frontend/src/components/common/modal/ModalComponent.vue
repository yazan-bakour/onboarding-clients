<template>
  <div class="fixed top-0 left-0 w-full h-full z-30 bg-[#000c1b]/[.5]"></div>
  <Teleport to="body">
    <div class="modal bg-[#fff] w-[980px] m-auto flex flex-col p-6 shadow-md rounded-xl">
      <slot />
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 418px;
  margin-left: -150px;
  border: 0;
}
</style>