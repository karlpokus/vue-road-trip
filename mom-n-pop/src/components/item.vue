<template>
  <div>
    <p>{{item.name}} is {{item.cost}}$</p>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
export default {
  computed: {
    item: function() {
      return this.$store.getters.getItems('id', this.$route.params.id)[0];
    }
  },
  methods: {
    buy: function() {
      this.$store.commit({
        type: 'addItemToCart',
        item: this.item
      });
    }
  }
}
</script>