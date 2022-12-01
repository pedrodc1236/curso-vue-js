new Vue({
  el: '#desafio',
  data: {
    nome: 'Pedro',
    idade: 24,
    imagem: 'https://www.shutterstock.com/image-vector/straw-hat-pirate-logo-isolated-260nw-1779101537.jpg'
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },
    randomNumber() {
      return Math.random()
    }
  }
})