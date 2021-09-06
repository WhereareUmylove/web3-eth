<template>
  <div>
    <h3></h3>
    <el-table :data="addressList" style="width: 100%">
      <el-table-column label="地址" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="余额" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.banlance }}</span>
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

  addressList: any[] = []

  //获取当前区块高度
  getBlockNumber() {
    this.$web3.eth.getBlockNumber().then((result) => {
      this.throughBlock(result)
    })
  }

  //从创世区块0开始遍历
  throughBlock(blockNumber) {
    if (!blockNumber) {
      console.log("blockNumber is 0")
      return false
    }
    for (var i = blockNumber; i > blockNumber - 10; i--) {
      this.getBlock(i)
    }
  }

  //获取当前区块的信息
  getBlock(blockNumber) {
    this.$web3.eth.getBlock(blockNumber).then((result) => {
      for (var i = 0; i < result.transactions.length; i++) {
        this.getTransactions(result.transactions[i])
      }
    })
  }

  //获取交易信息
  getTransactions(txh) {
    this.$web3.eth.getTransaction(txh).then((result) => {
      this.getCode(result.from)
      this.getCode(result.to)
    })
  }

  // 验证地址是否是合约地址
  getCode(address) {
    if (!address) {
      return false
    }
    this.$web3.eth.getCode(address).then((result) => {
      if (result == "0x") {
        this.getBalance(address)
      }
    })
  }

  // 获取地址余额
  getBalance(address) {
    this.$web3.eth.getBalance(address).then((result) => {
      if (!this.addressList.includes(address)) {
        this.addressList.push({
          address,
          banlance: result,
        })
      }
    })
  }

  created() {
    this.addressList = []
    this.getBlockNumber()
  }
}
</script>