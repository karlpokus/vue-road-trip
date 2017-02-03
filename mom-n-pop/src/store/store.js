import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    items: [
      {id:1,name:'hitchhikers guide to the galaxy',tag:'books',cost:14},
      {id:2,name:'surely your joking Mr Feynman',tag:'books',cost:12},
      {id:3,name:'lagavulin',tag:'whisky',cost:132},
      {id:4,name:'laphroaigh',tag:'whisky',cost:128},
      {id:5,name:'oban',tag:'whisky',cost:114},
      {id:6,name:'cap',tag:'hats',cost:94}
    ],
    cart: [],
    total: 0
  },
  getters: { // i.e maps and filters
    tags: function(state, getters) {
      function mapByTag(o) {
        return o.tag;
      }
      function uniq(base, tag) {
        if (base.indexOf(tag) < 0) base.push(tag);
        return base;
      }
      return state.items
        .map(mapByTag)
        .reduce(uniq, []);
    },
    getItems: function(state, getters) {
      return function(k, v) {
        return state.items
          .filter(function(o){
            return o[k] == v;
          });
      }
    }
  },
  mutations: {
  	addItemToCart: function(state, payload) {
      state.cart.push(payload.item);
      state.total += payload.item.cost;
    },
    removeItemFromCart: function(state, payload) {
      state.cart.splice(payload.index, 1);
      state.total -= payload.item.cost;      
    }
  }
});

export default store;