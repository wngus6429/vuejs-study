<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
  <!-- v-model:value 는 :value 와 같다 -->
</template>

<script>
export default {
  // @input 이벤트
  // :value 값
  props: ["value"], //v-model="checked" , 기본 false
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
