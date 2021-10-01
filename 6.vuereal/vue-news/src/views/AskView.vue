<template>
  <main>
    <p v-for="ask in fetchedAsk">
      <a v-bind:href="ask.url">
        {{ ask.title }}
      </a>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
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
