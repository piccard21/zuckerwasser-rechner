<template>
  <div class="table-overview">
    <b-form-group
      label="Verhältnis"
      :description="ratioDesc"
      label-for="select-ratio"
    >
      <b-form-select id="select-ratio" v-model="ratio" :options="options" />
    </b-form-group>
    <b-table
      striped
      bordered
      hover
      responsive
      :items="tableData"
      :fields="tableFields"
    >
      <!-- colspan top -->
      <template slot="thead-top">
        <tr>
          <th colspan="5">Lösungsverhältnis {{ tableRatio }}</th>
        </tr>
        <tr>
          <th colspan="3">&nbsp;</th>
          <th colspan="2">
            Futtermenge
          </th>
        </tr>
        <tr>
          <th colspan="3">&nbsp;</th>
          <th colspan="1">&nbsp;</th>
          <th colspan="1">
            <b-link href="#hint">-20%	&#0185;</b-link>
          </th>
        </tr>
        <tr>
          <th v-for="(unit, i) in tableUnits" :key="i" class="text-secondary">
            <span>{{ unit }}</span>
          </th>
        </tr>
      </template>

      <!-- custom headers -->
      <template slot="HEAD_foodTheoretical">
        theoretisch eingedickt
      </template>
      <template slot="HEAD_foodInFact">
        tatsächlich eingelagert
      </template>
    </b-table>
  </div>
</template>

<script>
import shared from "../mixins/shared";

export default {
  mixins: [shared],
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
    tableData() {
      return this.$store.getters.tableData;
    },
    tableFields() {
      return this.$store.getters.tableFields;
    },
    tableRatio() {
      return this.$store.getters.tableRatio;
    },
    tableUnits() {
      return this.$store.getters.tableUnits;
    }
  }
};
</script>

<style lang="scss">
.table-overview {
  th,
  td {
    text-align: center;
  }
}
</style>
