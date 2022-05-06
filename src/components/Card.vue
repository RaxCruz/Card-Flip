<script>
import { mapStores } from 'pinia';
import useCardStore from '../stores/cardStore';
export default {
  computed: {
    ...mapStores(useCardStore),
  },
  props: {
    index: Number,
    number: Number,
    isMatch: Boolean,
    isActive: Boolean,
    imgSrc: String
  },
  data() {
    return {
      // imageURL: `https://raw.githubusercontent.com/RaxCruz/ReadMe/71e28ca1550b6e918fddcc8de57427532aabb446/${this.imgSrc}.svg`
      imageURL: new URL(`../assets/${this.imgSrc}.svg`, import.meta.url).href

    }
  },
  methods: {
  }
};
</script>
<template>
  <div class="card">
    <div class=" front" @click="this.cardStore.cardClick(index, number)" v-bind:class="{ frontTransform: isActive }">
    </div>
    <div class=" back" v-bind:class="{ backTransform: isActive }" :style="{ backgroundImage: 'url(' + imageURL + ')' }">

    </div>

  </div>
</template >
  
<style>
* {
  margin: 0;
  padding: 0;
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/back.png');

}

.back {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotateY(-180deg);
}

.backTransform {
  transform: rotateY(0deg);
}

.frontTransform {
  transform: rotateY(180deg);
}

.card {
  box-sizing: border-box;
  cursor: pointer;
  height: 26%;
  width: 19%;
  perspective: 1000px;
  position: relative;
  border-radius: 6px;
  margin: 3px;
}
</style>
