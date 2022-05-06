<script>
import Card from "./components/Card.vue"
import { mapStores } from 'pinia';
import useCardStore from './stores/cardStore';
export default {
  computed: {
    ...mapStores(useCardStore),
  },
  components: { Card }
}
</script>

<template>
  <div class="container">
    <card v-for="(item, index) in cardStore.card_set " v-bind:key="index" :number="item.number" :isMatch="item.isMatch"
      :isActive="item.isActive" :index="index" :imgSrc="item.imgSrc">
    </card>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #0c0b08;
  height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  width: 700px;
  height: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
