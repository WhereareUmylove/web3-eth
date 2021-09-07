<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {},
})
export default class App extends Vue {
  [x: string]: any

  async created() {
    // this.$web3.eth.defaultAccount = obj.address

    // let receipt = await this.$web3.eth.getTransactionReceipt();
    // console.log(receipt)

    this.$web3.eth.getAccounts((err, res) => {
      if (!err) console.log("res", res)
      else console.log("err", err)
    })

    // let del = await this.$web3.eth.accounts.wallet.remove(obj.address)
    // console.log(del)

    // let acc = await this.$web3.eth.accounts.privateKeyToAccount(obj.privateKey)
    // console.log("acc", acc)

    // let chainId = await this.$web3.eth.getChainId()
    // console.log(chainId, this.$Web3.version)

    // let defacc = this.$web3.eth.defaultAccount
    // console.log("默认地址", defacc)

    // this.$web3.eth.sendTransaction()
  }
}
</script>
<style lang="scss" scoped>
</style>
