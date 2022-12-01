new Vue({
  el: '#desafio',
  data: {
      valor: ''
  },
  methods: {
    exibirAlerta() {
      alert('Estou te alertando!')
    },
    handleChange(e) {
      this.valor = e.target.value
    }
  }
})