<template>
  <main>
    <ListItem />
  </main>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
// import ListMixin from "../mixins/ListMixin.js";
export default {
  components: {
    ListItem,
  },
  mounted() {
    // 인스턴스가 화면에 불러와서 나타났을떄 실행됨
    bus.$emit("end:spinner");
  },
  // mixins: [ListMixin], //여기 안에 위에 mounted로 공통 활용 가능
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
