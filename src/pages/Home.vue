<template>
  <div class="home">
    <section class="home-intro">
      <div class="home-intro__img"></div>
      <div class="home-list">
        <div class="home-list__item home-list__item__pic1">本日精選</div>
        <div class="home-list__item home-list__item__pic2">人氣推薦</div>
        <div class="home-list__item home-list__item__pic3">新品上市</div>
      </div>
    </section>
    <section class="home-dessert">
      <div class="img1"></div>
      <div class="dessert-content dessert-content__right">
        <span class="dessert-content__para1">青山依舊在，幾度夕陽紅。慣看秋月春風。</span>
        <span class="dessert-content__para2">一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</span>
        <span class="dessert-content__para3">是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</span>
      </div>
      <div class="title title__right">為什麼</div>
      <div class="subtitle subtitle__right">選擇了做甜點？</div>
    </section>
    <section class="home-dessert">
      <div class="dessert-content dessert-content__left">
        <span class="dessert-content__para1">青山依舊在，幾度夕陽紅。慣看秋月春風。</span>
        <span class="dessert-content__para2">一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</span>
        <span class="dessert-content__para3">是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</span>
      </div>
      <div class="title title__left">為什麼</div>
      <div class="subtitle subtitle__left">ㄧ定要吃甜點嗎？</div>
      <div class="img2"></div>
    </section>
    <section class="home-dessert home-dessert__white">
      <div class="title title__middle">想吃甜點</div>
      <div class="subtitle subtitle__middle">是不需要理由的。</div>
    </section>
    <section class="home-shop">
      <dessert-product v-for="(product,index) in products" :key="index" :product="product"/>
    </section>
  </div>
</template>

<script>
/* eslint-disable */

import DessertProduct from '../components/dessertProduct'
import heatherSchwartz from '../assets/image/heather-schwartz.jpg'
import strawcake from '../assets/image/strawcake.jpg'
import rezelApacionado from '../assets/image/rezel-apacionado.jpg'

export default {
  components: {
    DessertProduct
  },
  data () {
    return {
      products: [
        {image: heatherSchwartz, title: '焦糖馬卡龍', price: 450 },
        {image: strawcake, title: '焦糖馬卡龍', price: 450 },
        {image: rezelApacionado, title: '焦糖馬卡龍', price: 450 }
      ]
    }
  }
}
</script>

<style>

</style>
