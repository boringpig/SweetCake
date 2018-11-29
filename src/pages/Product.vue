<template>
  <div class="product">
    <section class="product-intro">
      <div class="product-intro__img"></div>
      <div class="title product-title">想吃甜點</div>
      <div class="subtitle product-subtitle">是不需要理由的。</div>
    </section>
    <section class="product-content">
      <ul class="product-nav">
        <li class="product-nav__item product-nav__head">甜點類別</li>
        <li class="product-nav__item product-nav__hover">所有甜點 (48)</li>
        <li class="product-nav__item">本日精選 (10)</li>
        <li class="product-nav__item">人氣推薦 (26)</li>
        <li class="product-nav__item">新品上市 (12)</li>
      </ul>
      <div class="product-list">
        <div class="product-list__items">
          <dessert-product v-for="(product,index) in products" :key="index" :product="product"/>
        </div>
        <div class="product-list__paginaion">
          <dessert-pagination/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import DessertProduct from '../components/dessertProduct'
import DessertPagination from '../components/dessertPagination'
import brendaGodinez from '../assets/image/brenda-godinez.jpg'
import heatherSchwartz from '../assets/image/heather-schwartz.jpg'
import brookeLark1 from '../assets/image/brooke-lark-1.jpg'
import foodPhotographer from '../assets/image/food-photographer.jpg'
import strawcake from '../assets/image/strawcake.jpg'
import foodPhotogra from '../assets/image/food-photogra.jpg'
export default {
  components: {
    DessertProduct, DessertPagination
  },
  data () {
    return {
      products: [
        {image: brendaGodinez, title: '焦糖馬卡龍', price: 450 },
        {image: heatherSchwartz, title: '焦糖馬卡龍', price: 450 },
        {image: brookeLark1, title: '焦糖馬卡龍', price: 450 },
        {image: foodPhotographer, title: '焦糖馬卡龍', price: 450 },
        {image: strawcake, title: '焦糖馬卡龍', price: 450 },
        {image: foodPhotogra, title: '焦糖馬卡龍', price: 450 }
      ]
    }
  }
}
</script>

<style>

</style>
