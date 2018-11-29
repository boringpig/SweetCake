<template>
  <header class="header">
    <img class="header-image" src="../assets/image/logo.png" alt="logo">
    <div class="content">
      <ul class="navbar">
        <router-link to="/" class="navbar__item">首頁</router-link>
        <router-link to="/product" class="navbar__item">甜點</router-link>
        <router-link to="/login" class="navbar__item">登入</router-link>
      </ul>
      <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'dessertHeader'
}
</script>

<style>

</style>
