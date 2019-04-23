import Vue from "vue";
import Router from "vue-router";
import CalcContent from "./views/CalcContent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: {
        name: "calculator"
      },
      component: CalcContent,
      children: [
        {
          path: "calculator",
          name: "calculator",
          component: () =>
            import(/* webpackChunkName: "calculator" */ "./views/Form.vue")
        },
        {
          path: "table",
          name: "table",
          component: () =>
            import(/* webpackChunkName: "table" */ "./views/Table.vue")
        }
      ]
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () =>
        import(/* webpackChunkName: "table" */ "./views/Impressum.vue")
    }
  ]
});
