<template>
  <ul>
    <li v-for="item in items">
      <router-link :to="{path:'item/' + item.id}">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.getters.getItems('tag', this.$route.query.tag);
    }
  }
}
</script>