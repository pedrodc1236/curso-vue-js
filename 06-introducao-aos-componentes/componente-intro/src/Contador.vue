<template>
  <div class="contador">
      <span>{{ contador }}</span>
      <button @click="add">+</button>
      <button @click="sub">-</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
      add() {
          this.contador++
      },
      sub() {
          this.contador--
      }
  }
}
</script>

<style scoped>
  span {
      border-bottom: 2px solid rgba(158, 9, 9, 0.322);
      height: 20px;
      padding: 4px 15px;
  }

  button {
    height: 26px;
    width: 26px;
    border-radius: 13px;
    background-color: purple;
    color: white;
  }
</style>
