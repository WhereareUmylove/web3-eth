<template>
  <div>
    <el-input v-model="fromBlock" placeholder="fromBlock最早区块编号  默认为 null"></el-input>
    <el-input v-model="address" placeholder="address 地址或地址列表，仅订阅来自这些指定账户地址的日志"></el-input>
    <el-input v-model="topics" placeholder="topics 主题数组，仅订阅日志中包含这些主题的日志"></el-input>
    <el-button @click="find">查询</el-button>
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
  fromBlock = null
  address = ""
  topics = ""

  async find() {
    this.$web3.setProvider(
      new this.$Web3.providers.WebsocketProvider(
        "wss://ws-testnet.huobichain.com"
      )
    )

    let topics = this.topics.split(",")

    this.$web3.eth
      .subscribe(
        "logs",
        {
          fromBlock: this.fromBlock,
          address: this.address,
          topics,
        },
        function (error, result) {
          if (error) console.dir(error, "err")
          else console.log(result, "res")
        }
      )
      .on("connected", function (subscriptionId) {
        console.log(subscriptionId, "订阅ID")
      })
      .on("data", (data) => {
        console.log(data, "data")
        if (this.tableData.length > 9) this.tableData.pop()
        this.tableData.unshift(data)
      })
      .on("changed", function (log) {
        console.log(log,'xxx')
      })
  }

  async created() {
    this.address = await this.$web3.eth.abi.encodeFunctionSignature({
      name: "myMethod",
      type: "function",
      inputs: [
        {
          type: "uint256",
          name: "myNumber",
        },
        {
          type: "string",
          name: "myString",
        },
      ],
    })

    this.topics = await this.$web3.eth.abi.encodeEventSignature({
      name: "Transfer",
      type: "event",
      inputs: [
        {
          type: "address",
          name: "from",
        },
        {
          type: "address",
          name: "to",
        },
        {
          type: "uint256",
          name: "value",
        },
      ],
    })
  }
}
</script>