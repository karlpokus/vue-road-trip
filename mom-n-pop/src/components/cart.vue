<template>
  <div>
    <p>{{cart.length}} itemz in cart at {{total}}$</p>
    <ul>
      <li v-for="(item, index) in cart">
        {{item.name}}
        <button @click="removeItem(item, index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cart: function() {
      return this.$store.state.cart;
    },
    total: function() {
      return this.$store.state.total;
    }
  },
  methods: {
    removeItem: function(item, index) {
      this.$store.commit({
        type: 'removeItemFromCart',
        item: item,
        index: index
      });
    }
  }
}
</script>