<template>
  <main>
    <ListItem />
  </main>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
// import bus from '../utils/bus.js'
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store.dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log("Newsfetched");
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
