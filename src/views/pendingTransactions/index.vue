<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="交易哈希" align="center">
        <template slot-scope="{ row }">
          <span>{{ row }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {},
})
export default class App extends Vue {
  [x: string]: any
  tableData: string[] = []

  async created() {
    this.$web3.setProvider(
      new this.$Web3.providers.WebsocketProvider(
        "wss://ws-testnet.huobichain.com"
      )
    )

    this.$web3.eth
      .subscribe("pendingTransactions")
      .on("data", (data) => {
        console.log(1)
        if (this.tableData.length > 9) this.tableData.pop()
        this.tableData.unshift(data)
      })
      .on("changed", (changed) => {
        console.log(changed, "-changed")
      })
  }
}
</script>