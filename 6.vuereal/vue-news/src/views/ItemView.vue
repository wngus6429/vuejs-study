<template>
  <main>
    <p>
      {{ this.$store.state.item.title }}
    </p>
    <div>
      <p>
        {{ this.$store.state.item.content }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  //이 페이지에 오면 데이터 처리를 하고 위, 템플릿에서 표시하는거지
  created() {
    console.log(this.$route);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>
