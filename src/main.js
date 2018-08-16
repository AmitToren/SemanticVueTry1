// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import SuiVue from "semantic-ui-vue";

import Sem from "../src/SemanticTry.vue";
import VerticallyDividedExample from "../src/semanticForm.vue";

Vue.config.productionTip = false;

Vue.use(SuiVue);
Vue.use(VerticallyDividedExample);

/* eslint-disable no-new */
new Vue({
  el: "#sem",
  components: { Sem },
  template: "<sem/>"
});

new Vue({
  el: "#VerticallyDividedExample",
  components: { VerticallyDividedExample },
  template: "<VerticallyDividedExample/>"
});
