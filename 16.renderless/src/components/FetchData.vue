<script>
import axios from "axios";
export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    axios.get(this.url)
      .then((response) => {
        this.response = response.data;
        this.loading = false;
        console.log("작동");
      })
      .catch((error) => {
        alert("[ERROR] fetching the data", error);
        console.log(error);
      });
  },
  render() {
    // 하위 컴포넌트에서 상위컴포넌트로 올린다 $scopedSlots 데이터만 넘김
    // slot -> v-slot // $scopedSlots.default -> $slots.default
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>
