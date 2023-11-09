import { defineStore } from 'pinia'


export const useReviewStore = defineStore('review', () => {
    const count = ref(0)
    function increment() {
      count.value++
    }
  
    return { count, increment }
  })