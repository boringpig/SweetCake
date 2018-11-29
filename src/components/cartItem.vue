<template>
  <div class="cart-item">
    <div class="cart-item__img" :style="`background-image: url('${product.image}')`"></div>
    <div class="cart-item__title">
      <h3>{{ product.title }}</h3>
      <h4>{{ `NT$ ${product.price}` }}</h4>
    </div>
    <div class="cart-item__number">
      <div class="cart-item__number-icon" @click="minusQuantity">
        <i class="fas fa-minus"></i>
      </div>
      <input type="text" class="cart-item__number-input" :value="product.quantity">
      <div class="cart-item__number-icon" @click="plusQuantity">
        <i class="fas fa-plus"></i>
      </div>
    </div>
    <div class="cart-item__total-price">
      <h3>{{ `NT$ ${total_price}`}}</h3>
    </div>
    <div class="cart-item__delete-btn">
      <i class="far fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.total_price = parseInt(this.product.quantity) * parseInt(this.product.price)
  },
  data () {
    return {
      total_price: 0
    }
  },
  methods: {
    minusQuantity () {
      this.product.quantity -= 1
      this.total_price = this.product.quantity * this.product.price
    },
    plusQuantity () {
      this.product.quantity += 1
      this.total_price = this.product.quantity * this.product.price
    }
  }
}
</script>

<style>

</style>
