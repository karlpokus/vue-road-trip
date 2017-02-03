<template>
  <div id="app">
    <h1>
      <img class="brand-img" src="~assets/brand.jpg">
      Mom n pop store
    </h1>
    <select v-on:change="renderByTag">
      <option value="null">no category selected</option>
      <option v-for="tag in tags" :value="tag">
        {{tag}}
      </option>
    </select>
    <router-link to="/cart">cart ({{cartCount}} for {{total}}$)</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'

export default {
  computed: {
    tags: function() {
      return this.$store.getters.tags;
    },
    cartCount: function() {
      return this.$store.state.cart.length;
    },
    total: function() {
      return this.$store.state.total;
    }
  },
  methods: {
    renderByTag: function(e){
      var route = e.target.value;
      router.push({
        path: '/items',
        query: {
          tag: e.target.value
        }
      });
    }
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
