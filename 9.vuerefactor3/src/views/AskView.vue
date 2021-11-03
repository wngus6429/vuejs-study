<template>
  <main>
    <ListItem />
  </main>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASK")
        .then(() => {
          console.log("Askfetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 800);
  },
};
</script>

<style></style>
