// https://vuejs.org/v2/guide/unit-testing.html

// What do we want to test?
// per route -
// home should have all tags in a select
// items should have x items based on query tag
// item should have 1 item
// cart should be updated accordinlgy

/* vueify + browserify
var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')

browserify('./src/main.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("./bundle.js"))
*/

/* just an options object
var items = {
  template: '<span>{{ message }}</span>',
  data: function() {
    return {
      message: 'hello!'
    }
  },
  created: function() {
    this.message = 'bye!'
  }
};

test('raw obj', function(t){
  t.equal(typeof items.created, 'function', '.created');
  t.equal(typeof items.data, 'function', '.data');
  t.equal(items.data().message, 'hello!', '.data.message');
  t.end();
});

test('post mount', function(t){
  var vm = new Vue(items).$mount();
  t.equal(vm.message, 'bye!', 'vm.message');

  // test
  //var Ctor = Vue.extend(items);
  //c = new Ctor().$mount();
  //t.equal(vm.$el.textContent, 'bye!', 'vm textContent');

  console.log(vm.$el);

  t.end();
});
*/
