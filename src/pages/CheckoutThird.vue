<template>
<div class="checkout">
  <div class="checkout-form" :style="formHeight">
    <div class="checkout-form__header">
      <h2 class="checkout-form__header-title">發票</h2>
      <div class="progress">
          <div class="circle done"></div>
          <div class="circle done"></div>
          <div class="circle active"></div>
      </div>
    </div>
    <div class="checkout-form__body">
      <div class="checkout-form__navbar">
        <h2
          :class="['checkout-form__navbar-item', {'checkout-form__navbar-active': mode==='electronic'}]"
          @click="mode='electronic'"
        >電子發票</h2>
        <h2
          :class="['checkout-form__navbar-item', {'checkout-form__navbar-active': mode==='mailing'}]"
          @click="mode='mailing'"
        >郵寄發票</h2>
      </div>
      <template v-if="mode === 'electronic'">
        <div class="row">
          <div class="col-12">
            <label for="">電子郵件信箱</label>
            <input type="text" placeholder="example@email.com">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="">統一編號（選填</label>
            <input type="text" placeholder="12345678">
          </div>
        </div>
      </template>
      <template v-if="mode === 'mailing'">
        <div class="row" style="margin-bottom:0px;">
          <div class="col-6">
            <label for="">地址</label>
            <div class="dropdown">
              <select name="" id="">
                <option value="" hidden>高雄市</option>
                <option value="台中市">台中市</option>
              </select>
            </div>
          </div>
          <div class="col-6" style="margin-top:20px;">
            <div class="dropdown">
              <select name="" id="">
                <option value="" hidden>新興區</option>
                <option value="潭子區">潭子區</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
              <input type="text" placeholder="幸福路 520 號">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="">統一編號（選填）</label>
            <input type="text" placeholder="12345678">
          </div>
        </div>
      </template>
    </div>
    <router-link to="/paid" class="checkout-form__submit">確認結帳</router-link>
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
      mode: 'electronic',
      products: [
        { image: strawberry, title: '焦糖馬卡龍（2）', price: 900 },
        { image: strawcake, title: '焦糖馬卡龍（2）', price: 900 },
        { image: brookeLark1, title: '焦糖馬卡龍（2）', price: 900 }
      ]
    }
  },
  computed: {
    formHeight () {
      let h = 460
      if (this.mode === 'mailing') h = 520
      return `height: ${h}px`
    }
  }
}
</script>

<style>

</style>
