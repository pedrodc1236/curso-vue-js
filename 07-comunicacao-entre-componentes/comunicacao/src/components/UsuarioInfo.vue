<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click='reiniciarNome'>Reiniciar Nome</button>
        <button @click='reiniciarFn()'>Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: 'Anônimo',
            // default: function() {
            //     return Array(10).fill(1).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        reiniciarNome() {
            this.nome = 'Pedro',
            this.$emit('mudouNome', this.nome)
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
