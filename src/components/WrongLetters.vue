<template>
    <div class="wrong-letters-container">
        <div class="wrong-letters">
            <p>You have {{lives}} lives left</p>
            <p v-show="wrongLetters.length >0 ">Wrong</p>
            <span v-for="(letter, i) in wrongLetters" :key="letter">
                {{letter}}
                {{i === wrongLetters.length - 1 ? "": ", "}}    
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wrongLetters: {type: Array, default: () => []},
    }

}
</script>

<style>

</style>