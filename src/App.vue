<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <van-tabbar v-model="active">
        <van-tabbar-item to="/home">我的</van-tabbar-item>
        <van-tabbar-item to="/find">音乐馆</van-tabbar-item>
        <van-tabbar-item to="/cloud">推荐</van-tabbar-item>
        <van-tabbar-item to="/video">动态</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  children: [{}]
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
</style>
