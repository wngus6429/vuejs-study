<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item + 1">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew Items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  //위에 바로 emit 때림
  //   methods: {
  //     sendRenew() {
  //       this.$emit("renew");
  //     },
  //   },
};
</script>

<style></style>
