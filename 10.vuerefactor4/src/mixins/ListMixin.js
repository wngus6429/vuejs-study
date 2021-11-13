import bus from "../utils/bus";
// mixin
export default {
  // 재사용할 컴포넌트 옵션
  created() {
    bus.$emit("start:spinner");
    // #1
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        // #5
        console.log(5);
        console.log("Newsfetched");
        bus.$emit("end:spinner");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
