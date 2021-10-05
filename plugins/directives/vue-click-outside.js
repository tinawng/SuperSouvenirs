import Vue from "vue";

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target) || event.target.closest('.floating_player_container'))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('mousedown', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('mousedown', el.clickOutsideEvent)
  },
})