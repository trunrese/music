<template>
  <div id="app">
    <router-view />
    <Singsong></Singsong>
    <!-- <Liu></Liu> -->
    <div id="nav">
      <van-tabbar route>
        <van-tabbar-item :to="{name:'home'}" icon="contact">我的</van-tabbar-item>
        <van-tabbar-item :to="{name:'find'}" icon="music-o">音乐馆</van-tabbar-item>
        <van-tabbar-item :to="{name:'cloud'}" icon="ecard-pay">推荐</van-tabbar-item>
        <van-tabbar-item :to="{name:'login'}" icon="aim">登录</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import Singsong from "./components/Singsong";
import Liu from "./components/Liu";
export default {
  data() {
    return {};
  },
  children: [{}],
  components: {
    Singsong,
    Liu
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgba(240, 245, 247, 0.473);
  display: inline-block;
  width: 20%;
  height: 30px;
}
#nav a:hover {
  font-size: 20px;
  color: white;
}
#nav a.router-link-exact-active {
  color: white;
}
.van-nav-bar {
  position: relative;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
