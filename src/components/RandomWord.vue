<template>
  <div>
      <h1>Random word</h1>
      <v-btn v-on:click="queryRandomWord">
          get all random words
      </v-btn>
  </div>
</template>

<script>
export default {
    name: "RandomWord",
    data: () => {
        return {
            randomWord: "carrot",
            apiRandomWord: ""
        }
    },
    methods: {
        queryRandomWord() {
            fetch("https://random-word.ryanrk.com/api/en/word/random")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
    },
    onLoad(){
 console.log(this.$appName)

    }
    
}
</script>

<style>

</style>