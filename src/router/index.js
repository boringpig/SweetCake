import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Login from '@/pages/Login'
import Cart from '@/pages/Cart'
import CheckoutFirst from '@/pages/CheckoutFirst'
import CheckoutSecond from '@/pages/CheckoutSecond'
import CheckoutThird from '@/pages/CheckoutThird'
import Paid from '@/pages/Paid'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/product', name: 'Product', component: Product },
    { path: '/login', name: 'Login', component: Login },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout-first', name: 'CheckoutFirst', component: CheckoutFirst },
    { path: '/checkout-second', name: 'CheckoutSecond', component: CheckoutSecond },
    { path: '/checkout-third', name: 'CheckoutThird', component: CheckoutThird },
    { path: '/paid', name: 'Paid', component: Paid }
  ]
})
