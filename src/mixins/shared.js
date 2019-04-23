export default {
  computed: {
    ratio: {
      get() {
        return this.$store.state.ratio;
      },
      set(value) {
        this.$store.commit("setRatio", { value });
      }
    },
    ratioDesc() {
      const desc = {
        "1-1":
          "1:1 Zuckerwasser regt die Bienen zum Waben ausbauen an, eignet sich auch zur Reizfütterung und zur Überbrückung trachtarmer Perioden. Allerdings kann der Zucker im Honigraum eingelagert werden.",
        "3-2":
          "3:2 Zuckerwasser eignet sich hervorragend zur Wintereinfütterung der Bienen."
      };
      return desc[this.ratio];
    }
  }
};
