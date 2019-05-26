import Vue from "vue";
import Vuex from "vuex";

import tableData from "./lib/data";

Vue.use(Vuex);

// H20 -> gesamt
const RATIO_FACTOR = {
  "1-1": 1.6,
  "3-2": 1.9 // ~ 1.3 / 0.7
};

const FOOD_FACTOR = 1.2;
const SUGAR_FACTOR_LITER_KILO = 0.6;
const FOOD_LOST_PERCENT = 15;

const getDefaultState = () => {
  return {
    ratio: "3-2",
    currentFactorOverall: RATIO_FACTOR["3-2"],
    currentFactorPerLiter: RATIO_FACTOR["3-2"] - 1,
    sugarKilo: undefined,
    sugarLiter: undefined,
    water: undefined,
    overallLiquid: undefined,
    overallFoodTheoretical: undefined,
    overallFoodInFact: undefined
  };
};

const actionTypes = {
  SET_WATER: "setWater",
  SET_SUGAR_KILO: "setSugarKilo",
  SET_OVERALL_LIQUID: "setOverallLiquid",
  SET_OVERALL_FOOD_THEORETICAL: "setOverallFoodTheoretical",
  SET_OVERALL_FOOD_INFACT: "setOverallFoodInFact"
};

const mutationTypes = {
  SET_RATIO: "setRatio"
};

export default new Vuex.Store({
  state: getDefaultState(),
  getters: {
    tableData(state) {
      return tableData[state.ratio].items;
    },
    tableFields() {
      return tableData.fields;
    },
    tableRatio(state) {
      return tableData[state.ratio].text;
    },
    tableUnits() {
      return tableData.units;
    }
  },
  mutations: {
    // public
    [mutationTypes.SET_RATIO](state, { value }) {
      state = Object.assign(state, getDefaultState());
      state.ratio = value;
      state.currentFactorOverall = RATIO_FACTOR[value];
      state.currentFactorPerLiter = RATIO_FACTOR[value] - 1;
    },
    // private
    setOverAllFood(state) {
      state.overallFoodTheoretical = state.sugarKilo * FOOD_FACTOR;
      state.overallFoodInFact =
        state.overallFoodTheoretical -
        (state.overallFoodTheoretical / 100) * FOOD_LOST_PERCENT;
    }
  },
  actions: {
    // public
    [actionTypes.SET_SUGAR_KILO]({ state, commit }, { value }) {
      state.sugarKilo = value;

      state.sugarLiter = state.sugarKilo * SUGAR_FACTOR_LITER_KILO;
      state.water = state.sugarLiter / state.currentFactorPerLiter;
      state.overallLiquid = state.water + state.sugarLiter;

      commit("setOverAllFood");
    },
    [actionTypes.SET_WATER]({ state, commit }, { value }) {
      state.water = value;

      state.overallLiquid = state.water * state.currentFactorOverall;

      state.sugarLiter = state.overallLiquid - state.water;
      state.sugarKilo = state.sugarLiter / SUGAR_FACTOR_LITER_KILO;

      commit("setOverAllFood");
    },
    [actionTypes.SET_OVERALL_LIQUID]({ state, commit }, { value }) {
      state.overallLiquid = value;

      state.water = state.overallLiquid / state.currentFactorOverall;

      state.sugarLiter = state.overallLiquid - state.water;
      state.sugarKilo = state.sugarLiter / SUGAR_FACTOR_LITER_KILO;

      commit("setOverAllFood");
    },
    [actionTypes.SET_OVERALL_FOOD_THEORETICAL]({ state }, { value }) {
      state.overallFoodTheoretical = value;

      state.sugarKilo = state.overallFoodTheoretical / FOOD_FACTOR;
      state.sugarLiter = state.sugarKilo * SUGAR_FACTOR_LITER_KILO;

      state.water = state.sugarLiter / state.currentFactorPerLiter;

      state.overallLiquid = state.water + state.sugarLiter;

      state.overallFoodInFact =
        state.overallFoodTheoretical -
        (state.overallFoodTheoretical / 100) * FOOD_LOST_PERCENT;
    },
    [actionTypes.SET_OVERALL_FOOD_INFACT]({ state }, { value }) {
      state.overallFoodInFact = value;

      state.overallFoodTheoretical =
        (100 * state.overallFoodInFact) / (100 - FOOD_LOST_PERCENT);

      state.sugarKilo = state.overallFoodTheoretical / FOOD_FACTOR;
      state.sugarLiter = state.sugarKilo * SUGAR_FACTOR_LITER_KILO;

      state.water = state.sugarLiter / state.currentFactorPerLiter;

      state.overallLiquid = state.water + state.sugarLiter;
    }
  }
});
