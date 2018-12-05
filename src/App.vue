<template>
  <div id="app">
    <dessert-header/>
    <router-view/>
    <dessert-footer/>
  </div>
</template>

<script>
import DessertHeader from './components/dessertHeader'
import DessertFooter from './components/dessertFooter'
export default {
  name: 'App',
  components: {
    DessertHeader, DessertFooter
  },
  mounted () {
    console.log(process.env)
  }
}
</script>

<style lang="scss">
#app {
  width: 1024px;
  height: 100%;
  margin: 0px auto;
}
</style>
