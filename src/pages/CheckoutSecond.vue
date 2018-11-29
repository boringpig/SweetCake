<template>
  <div class="checkout">
    <div class="checkout-form">
      <div class="checkout-form__header">
        <h2 class="checkout-form__header-title">付款</h2>
        <div class="progress">
          <div class="circle done"></div>
          <div class="circle active"></div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="checkout-form__body">
        <div class="row">
          <div class="col-12">
            <label for="">信用卡卡號</label>
            <input type="text" placeholder="9012-3456-7890-1234">
            <i class="far fa-credit-card checkout-form__body-icon"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label for="">持卡人姓名</label>
            <input type="text" placeholder="王">
          </div>
          <div class="col-6" style="margin-top:20px;">
            <input type="text" placeholder="小明">
          </div>
        </div>
        <div class="row" style="margin-bottom:0px;">
          <div class="col-6">
            <label for="">有效期限</label>
            <div class="dropdown">
              <select name="" id="">
                <option value="" hidden>月</option>
                <option value="7">07</option>
              </select>
            </div>
          </div>
          <div class="col-6" style="margin-top:20px;">
            <div class="dropdown">
              <select name="" id="">
                <option value="" hidden>年</option>
                <option value="1994">1994</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:15px;">
          <div class="col-6">
              <label for="">背面末三碼</label>
              <input type="text" placeholder="123">
          </div>
        </div>
      </div>
      <router-link to="/checkout-third" class="checkout-form__submit">下一步</router-link>
    </div>
    <div class="checkout-detail">
      <div class="checkout-detail__summary">
        <h2 class="checkout-detail__summary-title">訂單摘要</h2>
        <div class="checkout-detail__summary-content">
          <span>小計</span>
          <span>NT$ 2,700</span>
        </div>
        <div class="checkout-detail__summary-content">
          <span>運費</span>
          <span>NT$ 300</span>
        </div>
        <div class="checkout-detail__summary-content">
          <span class="total-name">總計</span>
          <span class="total-price">NT$ 3,000</span>
        </div>
      </div>
      <div class="checkout-detail__purchased">
        <h2 class="checkout-detail__purchased-title">購物清單</h2>
        <div class="checkout-detail__purchased-list">
          <purchased-item v-for="(product,index) in products" :key="index" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import PurchasedItem from '@/components/purchasedItem'
import strawberry from '../assets/image/strawberry.jpg'
import strawcake from '../assets/image/strawcake.jpg'
import brookeLark1 from '../assets/image/brooke-lark-1.jpg'

export default {
  components: {
    PurchasedItem
  },
  data () {
    return {
      products: [
        {image: strawberry, title: '焦糖馬卡龍（2）', price: 900 },
        {image: strawcake, title: '焦糖馬卡龍（2）', price: 900 },
        {image: brookeLark1, title: '焦糖馬卡龍（2）', price: 900 }
      ]
    }
  }
}
</script>

<style>

</style>
