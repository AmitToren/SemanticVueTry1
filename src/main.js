// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Sem from "../src/SemanticTry.vue";
import SuiVue from "semantic-ui-vue";

Vue.config.productionTip = false;
Vue.use(SuiVue);
/* eslint-disable no-new */
new Vue({
  el: "#sem",
  components: { Sem },
  template: "<sem/>"
});
