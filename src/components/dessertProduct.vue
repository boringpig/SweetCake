<template>
  <div class="item">
    <div class="item-top">
      <div class="item-top__img" :style="`background-image: url('${product.image}')`">
        <div class="item-top__tap">本日精選</div>
        <i class="far fa-heart item-top__icon"></i>
      </div>
    </div>
    <div class="item-content">
      <div class="item-content__name">
        <span>{{ product.title }}</span>
      </div>
      <div class="item-content__price">
        <span>{{ `NT$ ${product.price}` }}</span>
      </div>
    </div>
    <div class="item-bottom">加入購物車</div>
  </div>
</template>

<script>
export default {
  name: 'dessertProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
