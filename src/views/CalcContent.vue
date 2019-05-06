<template>
  <b-card no-body class="content">
    <!-- tabs -->
    <b-tabs card>
      <template slot="tabs">
        <b-nav-item
          v-for="(tab, i) in tabItems"
          :key="i"
          :to="tab.to"
          :active="$route.name === tab.to.name"
          @click.prevent="tabIndex = i"
        >
          {{ tab.text }}
        </b-nav-item>
      </template>
    </b-tabs>

    <!-- content -->
    <b-container>
      <router-view />

      <!-- hints -->
      <b-alert id="hint" show class="mt-4">
        Je nach Steigerung der Aktivität des Bienenvolkes und vermehrten Anlegen
        von Brut ist mit einer Minderung des eingedickten Futters von 10-20% zu
        rechnen.
      </b-alert>

      <div class="mb-3">
        <b-button v-b-toggle.collapse-1 variant="outline-warning" size="sm">
          Hinweis zur Richtigkeit der Daten
        </b-button>

        <b-collapse id="collapse-1" class="m-2">
          <b-alert show variant="warning">
            Grundlage für Berechungen sowie der Daten stellt der Artikel
            <a
              href="https://www.lwg.bayern.de/mam/cms06/bienen/dateien/fuetterung_.pdf"
              target="_blank"
            >
              <strong> Fütterung von Bienenvölkern-Futterwahl</strong>
            </a>
            der Bayerischen Landesanstalt für Weinbau und Gartenbau dar. Auf die
            Richtigkeit der Berechnungen wird keine Gewähr gegeben.
          </b-alert>
        </b-collapse>
      </div>
    </b-container>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        {
          text: "Rechner",
          to: { name: "calculator" }
        },
        {
          text: "Tabelle",
          to: { name: "table" }
        }
      ],
      tabIndex: 0
    };
  }
};
</script>
