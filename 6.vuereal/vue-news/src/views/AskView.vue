<template>
  <main>
    <div v-for="ask in fetchedAsk">
      {{ ask.title }}
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  // # 3
  // computed: {
  //   ...mapGetters({ asksData: "fetchedAsk" }),
  // },
  // # 2
  // computed: {
  //   ...mapState({
  //     asksData: (state) => state.asks,
  //   }),
  // },
  // # 1
  // asks(){
  //   return this.$store.state.asks
  // }
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
