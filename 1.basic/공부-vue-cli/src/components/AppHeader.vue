<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">Send</button>
  </header>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    sendEvent: function() {
      this.$emit("renew");
      //이안에 정의한 이벤트가 위쪽 App 쪽으로 가겠지
      //renew이벤트 올라가면 propsdata에 내려오던 값을 바꿔보자
    },
  },
};
</script>

<style></style>
