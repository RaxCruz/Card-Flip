import { defineStore } from 'pinia';

const useCardStore = defineStore('card', {
  id: 'cardStore',
  state: () => ({
    card_set: [
      { id: 0, number: 1, isMatch: false, isActive: false, imgSrc: "ace_of_diamonds" },
      { id: 1, number: 1, isMatch: false, isActive: false, imgSrc: "ace_of_spades" },
      { id: 2, number: 2, isMatch: false, isActive: false, imgSrc: "2_of_clubs" },
      { id: 3, number: 2, isMatch: false, isActive: false, imgSrc: "2_of_diamonds" },
      { id: 4, number: 3, isMatch: false, isActive: false, imgSrc: "3_of_hearts" },
      { id: 5, number: 3, isMatch: false, isActive: false, imgSrc: "3_of_spades" },
      { id: 6, number: 4, isMatch: false, isActive: false, imgSrc: "4_of_diamonds" },
      { id: 7, number: 4, isMatch: false, isActive: false, imgSrc: "4_of_spades" },
      { id: 8, number: 5, isMatch: false, isActive: false, imgSrc: "5_of_clubs" },
      { id: 9, number: 5, isMatch: false, isActive: false, imgSrc: "5_of_hearts" },
      { id: 10, number: 6, isMatch: false, isActive: false, imgSrc: "6_of_clubs" },
      { id: 11, number: 6, isMatch: false, isActive: false, imgSrc: "6_of_hearts" },
      { id: 12, number: 7, isMatch: false, isActive: false, imgSrc: "7_of_clubs" },
      { id: 13, number: 7, isMatch: false, isActive: false, imgSrc: "7_of_hearts" },
      { id: 14, number: 8, isMatch: false, isActive: false, imgSrc: "8_of_diamonds" },
      { id: 15, number: 8, isMatch: false, isActive: false, imgSrc: "8_of_hearts" },
      { id: 16, number: 9, isMatch: false, isActive: false, imgSrc: "9_of_diamonds" },
      { id: 17, number: 9, isMatch: false, isActive: false, imgSrc: "9_of_spades" },
      { id: 18, number: 10, isMatch: false, isActive: false, imgSrc: "10_of_hearts" },
      { id: 19, number: 10, isMatch: false, isActive: false, imgSrc: "10_of_spades" },
    ].sort(() => 0.5 - Math.random()),
    twoCard: [],

  }),

  getters: {

  },

  actions: {

    cardClick(index, number) {
      if (this.twoCard.length >= 2) return
      if (this.card_set[index].isActive) return
      this.twoCard.push({ 'number': number, 'index': index })
      this.card_set[index].isActive = true
      if (this.twoCard.length === 2) {
        this.matching(this.twoCard[0], this.twoCard[1]);
      }
    },

    matching(a, b) {
      if (a.number === b.number) {
        this.card_set[a.index].isMatch = true;
        this.card_set[b.index].isMatch = true;
        this.twoCard = []
      } else {
        this.init(a.index, b.index)
      }
    },

    init(a, b) {
      setTimeout(() => {
        this.card_set[a].isActive = false;
        this.card_set[b].isActive = false;
        this.twoCard = []
      }, 1000)
    }
  }
});

export default useCardStore;





    // cardClick(index, number) {
    //   if (this.twoCard.length < 2) {
    //     if (this.twoCard.length === 1 && this.twoCard[0].index !== index) {
    //       this.twoCard.push({ 'number': number, 'index': index })
    //       this.card_set[index].isActive = true
    //       this.matching();
    //     }
    //     else if (this.twoCard.length === 0) {
    //       this.twoCard.push({ 'number': number, 'index': index })
    //       this.card_set[index].isActive = true
    //     }
    //   }
    // },

    // matching() {
    //   if (this.twoCard[0] && this.twoCard[1] && this.twoCard[0].number === this.twoCard[1].number) {
    //     this.card_set[this.twoCard[0].index].isMatch = true;
    //     this.card_set[this.twoCard[1].index].isMatch = true;
    //     this.twoCard = []
    //   }
    //   else if (this.twoCard[0] && this.twoCard[1]) {
    //     setTimeout(() => {
    //       this.card_set[this.twoCard[0].index].isActive = false;
    //       this.card_set[this.twoCard[1].index].isActive = false;
    //       this.twoCard = []
    //     }, 600)
    //   }

    // }