import Vue from "vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

// development
// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);

// production
Vue.component("b-card", BCard);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-table", BTable);
Vue.component("b-jumbotron", BJumbotron);
Vue.component("b-form-input", BFormInput);
Vue.component("b-link", BLink);
Vue.component("b-tabs", BTabs);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-alert", BAlert);
Vue.component("b-button", BButton);
Vue.component("b-collapse", BCollapse);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-container", BContainer);

Vue.directive("b-toggle", BToggleDirective);

import BCard from "bootstrap-vue/es/components/card/card";
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import BFormSelect from "bootstrap-vue/es/components/form-select/form-select";
import BTable from "bootstrap-vue/es/components/table/table";
import BJumbotron from "bootstrap-vue/es/components/jumbotron/jumbotron";
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
import BLink from "bootstrap-vue/es/components/link/link";
import BTabs from "bootstrap-vue/es/components/tabs/tabs";
import BNavItem from "bootstrap-vue/es/components/nav/nav-item";
import BAlert from "bootstrap-vue/es/components/alert/alert";
import BButton from "bootstrap-vue/es/components/button/button";
import BCollapse from "bootstrap-vue/es/components/collapse/collapse";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BToggleDirective from "bootstrap-vue/es/directives/toggle/toggle";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
