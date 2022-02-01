<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Minha lista de séries</h1>
    <v-form>
      <v-text-field label="Nova série" v-model="novaSerie" @keydown.enter="adicionar">
      <v-icon slot="append" @click="adicionar">mdi-send</v-icon>
      </v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="serie of series" :key="serie.id">
          {{ serie.titulo }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase"
export default {
  data() {
    return {
      uid: '',
      novaSerie: '',
      series: [],
    };
  },
  mounted() {
    this.uid = fb.auth.currentUser.uid;
    this.buscarSeriesDoServidor() 
  },
  methods: {
    async buscarSeriesDoServidor() {
      this.series = []
      const logTasks = await fb.tasksCollection
        .where("owner", "==", this.uid)
        .get();
      for (const doc of logTasks.docs) {
        this.series.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      }
    },
    async adicionar() {
      await fb.tasksCollection.add({
        titulo: this.novaSerie,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novaSerie = "";
      this.buscarSeriesDoServidor();
    }
  }
};
</script>

<style>

</style>