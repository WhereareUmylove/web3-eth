<template>
  <div class="app-wrapper">
    <el-menu :router="true" class="nav-menu" text-color="#cbcbcb" :default-active="$route.name" mode="horizontal">
      <el-menu-item index="active">
        <i class="el-icon-success"></i>
        <span slot="title">测似</span>
      </el-menu-item>
      <el-menu-item index="pendingTransactions">
        <i class="el-icon-success"></i>
        <span slot="title">pending交易</span>
      </el-menu-item>
      <el-menu-item index="banlance">
        <i class="el-icon-message"></i>
        <span slot="title">余额</span>
      </el-menu-item>
      <el-menu-item index="getTransaction">
        <i class="el-icon-discover"></i>
        <span slot="title">查询交易</span>
      </el-menu-item>
      <el-menu-item index="logs">
        <i class="el-icon-discover"></i>
        <span slot="title">日志</span>
      </el-menu-item>
    </el-menu>
    <main class="main">
      <div class="content">
        <!-- <el-collapse-transition> -->
        <router-view />
        <!-- </el-collapse-transition> -->
      </div>
    </main>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { getUsername } from "@/utils/storage";

@Component({
  components: {},
})
export default class App extends Vue {
  get username() {
    if (this.$store.state.username) return this.$store.state.username;
    return getUsername();
  }
  signOut() {
    this.$store.dispatch("Logout").then((res) => {
      this.$router.push("login");
    });
  }
}
</script>

<style lang="scss">
</style>