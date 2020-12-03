<template>
  <div v-if="finalMessage" class="popup-container">
    <div class="popup">
      <h2>{{ finalMessage }}</h2>
      <h3 v-show="status === 'lose'">The word was: {{ word }}</h3>
      <h3>Refresh the page to try again</h3>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    status: { type: String, default: '' },
    word: { type: String, default: '' }
  },
  setup(props, { emit }) {
    const finalMessage = computed(() => {
      if (props.status === 'win') return "You won!!!"
      if (props.status === 'lose') return "You Lost!!!"
      return ''
    })
    const reset = () => emit('reset')
    return { finalMessage, reset }
  }
}
</script>