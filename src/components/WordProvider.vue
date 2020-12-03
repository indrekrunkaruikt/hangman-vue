<template>
    <slot />
</template>

<script>
import { provide, reactive, watch } from 'vue'
export default {
    setup(){
        const randomWord = reactive({
            word: 'ratman'
        })
        provide('randomWord', randomWord)
        
        watch(randomWord, randomWord => {
            console.log(
                `Random word is ${randomWord.word}`
            )
        })
    }
}
</script>