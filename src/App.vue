<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <npm-demo :title="title"></npm-demo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import NpmDemo from './packages/npm-demo/Main.vue'

@Component({
  components: {
    // NpmDemo
  }
})
export default class App extends Vue {
  private title: string = 'npm...123456'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
