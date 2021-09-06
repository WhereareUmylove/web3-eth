<template>
  <div>
    <h3>查询交易</h3>
    <el-input v-model="transactionHash" placeholder="请输入交易哈希"></el-input>
    <el-button @click="findHash">查询</el-button>
    <div>
      {{result}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {},
})
export default class App extends Vue {
  [x: string]: any

  transactionHash = ""
  result = ""

  async created() {}

  async findHash() {
    let res = await this.$web3.eth.getTransaction(this.transactionHash)
    this.result = res
  }
}
</script>