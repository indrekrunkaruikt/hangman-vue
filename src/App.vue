<template>
    <div>
      <WrongLetters :wrong-letters="wrongLetters" :lives="lives"/>
      <Word :letters="letters" :correct-letters="correctLetters" />
      <Popup :status="status" :word="word" @reset="reset" />
      <Notification :show="notification" />
    </div>
</template>
<script>
import {computed, ref} from 'vue'

import './style.css'

import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'


import onKeyDown from './components/onKeyDown'
const words = ['progr']
const randomWord = () => words[Math.floor(Math.random() * words.length)]
export default {
  components: { WrongLetters, Word, Notification, Popup},
  setup(){
    const word = ref(randomWord())
    const guessedLetters = ref([])

    const letters = computed(() => word.value.split(''))

    const wrongLetters = computed(() =>
      guessedLetters.value.filter(l => !letters.value.includes(l))
    )

    const correctLetters = computed(() =>
      guessedLetters.value.filter(l => letters.value.includes(l))
    )

    const status = computed(() => {
      if(wrongLetters.value.length === 5){
        return 'lose'
      }
      if (letters.value.every(l => correctLetters.value.includes(l))){
        return 'win'
      }
      return ''
    })

    const reset = () => {
      guessedLetters.value = []
      word.value = randomWord()
    }
    const notification = ref(false)
    const showNotifications = () => {
      notification.value = true
      setTimeout(() => (notification.value = false), 2000)
    }
    onKeyDown(event => {
      const letter = event.key.toLowerCase()
      if(event.keyCode < 65 && event.keyCode > 90) return
      if(status.value) return
      if(guessedLetters.value.includes(letter)){
        showNotifications()
        return
      }
      guessedLetters.value.push(letter)
    })

    return {
      letters,
      word,
      wrongLetters,
      correctLetters,
      guessedLetters,
      notification,
      status,
      reset
    }
  }
}
</script>

<style>

</style>