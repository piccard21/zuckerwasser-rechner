<template>
  <div>
    <b-row>
      <!-- Ratio -->
      <b-col>
        <b-form-group
          label="Verhältnis"
          label-for="ratio"
          :description="ratioDesc"
        >
          <b-form-select
            id="ratio"
            v-model="ratio"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Zucker in Kilo -->
    <b-row>
      <b-col>
        <b-form-group label="Zucker" label-for="part-sugar" description="Kilo">
          <b-form-input
            id="part-sugar"
            autocomplete="off"
            :value="sugarKilo | roundFloat"
            @input="sugarKilo = $event"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Wasser in Liter -->
    <b-row>
      <b-col>
        <b-form-group label="Wasser" label-for="part-water" description="Liter">
          <b-form-input
            id="part-water"
            autocomplete="off"
            :value="water | roundFloat"
            @input="water = $event"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Gesamtmenge der Lösung in Liter -->
    <b-row>
      <b-col>
        <b-form-group
          label="Gesamtmenge der Lösung"
          label-for="all-liquid"
          description="Liter"
        >
          <b-form-input
            id="all-liquid"
            autocomplete="off"
            :value="liquid | roundFloat"
            @input="liquid = $event"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- theoretisch eingedicktes Futter in kg -->
    <b-row>
      <b-col>
        <b-form-group
          label="Theoretisch eingedicktes Futter"
          label-for="all-food-theo"
          description="Kilo"
        >
          <b-form-input
            id="all-food-theo"
            autocomplete="off"
            :value="foodTheoretical | roundFloat"
            @input="foodTheoretical = $event"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- tatsächlich eingelagertes Futter in kg -->
    <b-row>
      <b-col>
        <b-form-group
          label="Tatsächlich eingelagertes Futter"
          label-for="all-food-inFact"
          description="Kilo"
        >
          <b-form-input
            id="all-food-inFact"
            autocomplete="off"
            :value="foodInFact | roundFloat"
            @input="foodInFact = $event"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import shared from "../mixins/shared";

export default {
  mixins: [shared],
  filters: {
    roundFloat(val) {
      if (!val) return;

      if (val.toString().match(/^\d+\.*(\d{1,2})?$/i)) {
        return val;
      }

      return Math.round(val * 100) / 100;
    }
  },
  data() {
    return {
      options: [
        {
          value: "1-1",
          text: "1:1"
        },
        {
          value: "3-2",
          text: "3:2"
        }
      ]
    };
  },
  computed: {
    sugarKilo: {
      get() {
        return this.$store.state.sugarKilo;
      },
      set(v) {
        this.$store.dispatch("setSugarKilo", { value: this.checkValue(v) });
      }
    },
    water: {
      get() {
        return this.$store.state.water;
      },
      set(v) {
        this.$store.dispatch("setWater", { value: this.checkValue(v) });
      }
    },
    liquid: {
      get() {
        return this.$store.state.overallLiquid;
      },
      set(v) {
        this.$store.dispatch("setOverallLiquid", { value: this.checkValue(v) });
      }
    },
    foodTheoretical: {
      get() {
        return this.$store.state.overallFoodTheoretical;
      },
      set(v) {
        this.$store.dispatch("setOverallFoodTheoretical", {
          value: this.checkValue(v)
        });
      }
    },
    foodInFact: {
      get() {
        return this.$store.state.overallFoodInFact;
      },
      set(v) {
        this.$store.dispatch("setOverallFoodInFact", {
          value: this.checkValue(v)
        });
      }
    }
  },
  methods: {
    checkValue(val) {
      if (!val) return;
      return Number(val.toString().replace(",", "."));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
