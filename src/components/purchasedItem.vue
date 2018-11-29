<template>
  <div class="purchased-item">
    <div class="purchased-item__img" :style="`background-image: url('${product.image}')`"></div>
    <div class="purchased-item__content">
      <h3>{{ product.title }}</h3>
      <h2>{{ `NT$ ${product.price}` }}</h2>
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
  }
}
</script>

<style>

</style>
