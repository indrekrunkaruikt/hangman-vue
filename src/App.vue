<template>
  <div>
      <Game />
  </div>
</template>

<script>
// In Vue 3.0 the global parameters are accessible by using provide and inject.
import {provide} from 'vue'
import randomWords from 'random-words'
import Game from './Game'
  export default{
    components: {Game},
    setup() {
      // We create a variable that we can pass to all the child elements.
    const randomWord = randomWords()
    provide('randomWordSingletonKey', randomWord)
    }
  }
</script>

<style>

</style>