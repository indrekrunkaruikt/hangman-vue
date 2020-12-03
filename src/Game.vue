<template>
    <div>
      <WrongLetters :wrong-letters="wrongLetters" :lives="lives"/>
      <Word :letters="letters" :correct-letters="correctLetters" />
      <Popup :status="status" :word="word"/>
      <Notification :show="notification" />
    </div>
</template>
<script>

import {computed, ref, inject} from 'vue'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'


import onKeyDown from './assets/onKeyDown'
import './assets/style.css'


export default {
  components: { WrongLetters, Word, Notification, Popup},
  setup(){
    let word = inject('randomWordSingletonKey');
    console.log(word)
    const guessedLetters = ref([])

    const letters = computed(() => word.split(''))

    const wrongLetters = computed(() =>
      guessedLetters.value.filter(l => !letters.value.includes(l))
    )

    const correctLetters = computed(() =>
      guessedLetters.value.filter(l => letters.value.includes(l))
    )
    const lives = computed(() =>{
      return  5 - wrongLetters.value.length
    })
    const status = computed(() => {
      if(wrongLetters.value.length === 5){
        return 'lose'
      }
      if (letters.value.every(l => correctLetters.value.includes(l))){
        return 'win'
      }
      return ''
    })

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
      lives,
      notification,
      status,
    }
  }
}
</script>

<style>

</style>