<template>
  <div id="app">
    <h1>
      <img class="brand-img" src="~assets/brand.jpg">
      Mom n pop store
    </h1>
    <router-link to="/stuff">stuff</router-link>
    <router-link to="/cart">cart</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import navigation from './components/navigation'

export default {
  name: 'app',
  components: {
    //navigation
  }
}
</script>

<style>
body {
  font-family:monospace;
}
h1 {
  font-weight:400;
}
.brand-img {
  height:100px;
}
</style>
