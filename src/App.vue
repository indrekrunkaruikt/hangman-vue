<template>
  <div>
      <Game />
  </div>
</template>

<script>
import {provide} from 'vue'
import randomWords from 'random-words'
import Game from './Game'
  export default{
    components: {Game},
    setup() {
      // We create a singlton that we can pass to all the child elements.
    const randomWord = randomWords()
    provide('randomWordSingletonKey', randomWord)
    }
  }
</script>

<style>

</style>