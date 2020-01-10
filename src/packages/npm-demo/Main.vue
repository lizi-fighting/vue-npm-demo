<template>
  <div class="npm-demo-container">
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'NpmDemo'
})
export default class extends Vue {
  // 标题
  @Prop({ type: String, default: '', required: false }) private title!: string;
}
</script>

<style scoped>
.npm-demo-container {
  color: red;
}
</style>
