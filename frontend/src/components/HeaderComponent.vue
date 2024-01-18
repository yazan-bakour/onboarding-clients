<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
	<div class="logo-container">
		<!-- <img alt="" class="logo" src="" width="125" height="125" /> -->
	</div>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Customers</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <div class="account">
      <!-- <a href="#">Account</a> -->
    </div>
  </header>
</template>

<style scoped>
header {
  justify-content: space-between;
  padding: 18px;
	display: flex;
  line-height: 1.5;
  width: 100%;
  max-height: 89px;
  background-image: linear-gradient(93deg, hsla(160, 100%, 37%, 1) -46%, rgb(2, 88, 60) 64%);
}

.logo {
  width: 120px;
  height: 56px;
}

nav {
  padding-top: 20px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

.account {
  padding-top: 14px;
}

nav a.router-link-exact-active {
  color: #fff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a, div a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #c3c3c59a
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
