<template>
  <main>
    <ListItem />
    <!-- <ul class="news-list">
      <li v-for="ask in fetchedAsk" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <p class="news-title">
          <router-link v-bind:to="`item/${ask.id}`">
            {{ ask.title }}
          </router-link>
        </p>
        <small class="link-text">
          {{ ask.time_ago }} by
          <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
            {{ ask.user }}
          </router-link>
        </small>
      </li>
    </ul> -->
  </main>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
};
</script>

<style></style>
