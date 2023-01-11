<template>
  <div>
			<Rotulo nome="Nome">
					<input type="text" @input="changeName" :value="value.name">
			</Rotulo>
			<Rotulo nome="Sobrenome">
					<input type="text" @input="changeLastName" :value="value.lastName">
			</Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
  props: {
      value: {
        type: Object,
        required: true
      }
  },
  components: { Rotulo },
  methods: {
    changeName(event) {
        this.$emit('input', { name: event.target.value, lastName: this.value.lastName })
    },
    changeLastName(event) {
        this.$emit('input', { name: this.value.name, lastName: event.target.value })
    },
  }
}
</script>

<style>

</style>