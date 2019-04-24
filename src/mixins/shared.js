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
          "1:1 Zuckerwasser fördert den Bautrieb im und eignet sich zur Überbrückung trachtarmer Perioden.",
        "3-2":
          "3:2 Zuckerwasser eignet sich hervorragend für Ableger sowie zur Wintereinfütterung der Bienen."
      };
      return desc[this.ratio];
    }
  }
};
