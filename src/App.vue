<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
@Component({
  components: {},
})
export default class App extends Vue {}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>