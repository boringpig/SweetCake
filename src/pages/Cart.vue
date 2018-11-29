<template>
  <div class="cart">
    <div class="cart-list">
      <div class="cart-list__title">
        <h2>您的購物車</h2>
      </div>
      <cart-item v-for="(product,index) in products" :key="index" :product="product"/>
    </div>
    <div class="cart-detail">
      <h2 class="cart-detail__title">訂單摘要</h2>
      <div class="cart-detail__content">
        <span>小計</span>
        <span>NT$ 2,700</span>
      </div>
      <div class="cart-detail__content">
        <span>運費</span>
        <span>NT$ 300</span>
      </div>
      <div class="cart-detail__content">
        <span class="total-name">總計</span>
        <span class="total-price">NT$ 3,000</span>
      </div>
      <router-link to="/checkout-first" class="cart-detail__submit">結帳</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import CartItem from '../components/cartItem'
import brookelark1 from '../assets/image/brooke-lark-1.jpg'
import strawberry from '../assets/image/strawberry.jpg'
import strawcake from '../assets/image/strawcake.jpg'

export default {
  components: {
    CartItem
  },
  data () {
    return {
      products: [
        { image: strawberry, title: '焦糖馬卡龍', price: 450, quantity: 2 },
        { image: strawcake, title: '焦糖馬卡龍', price: 450, quantity: 2 },
        { image: brookelark1, title: '焦糖馬卡龍', price: 450, quantity: 2 }
      ]
    }
  }
}
</script>

<style>

</style>
