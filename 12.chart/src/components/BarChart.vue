<template>
  <div>
    <h1>Chart.js</h1>
    <canvas ref="barchart" id="bar" width="200" height="200"></canvas>
  </div>
</template>

<script>
// Vue Chart.js도 있음. 쓰기 편하게 만든걸 랩핑이라고 함
// import Chart from "chart.js"; ChartPlugins사용
export default {
  // props: ['propsdata']
  props: {
    propsdata: {
      type: Array,
      default: () => [{}],
    },
  },
  mounted() {
    // const myChart = new Chart(this.$refs.barchart, {
    const myChart = new this.$_Chart(this.$refs.barchart, {
      // 여기서 type, data, options는 chart.js에서 제공
      type: "bar",
      data: { labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: this.propsdata },
      options: {
        scales: { y: { beginAtZero: true },
        },
        onClick: function () {
          this.$emit("refresh:chart");
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style></style>
