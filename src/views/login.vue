<template>
  <div class="login">
    <input class="ipt1" type="text" placeholder="请输入你的手机号" />
    <br />
    <input class="ipt2" type="password" placeholder="请输入你的密码" />
    <br />
    <button @click="home">登录</button>
    <br />
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.login {
  padding: 10rem 5vw;
}
.ipt1 {
  margin: 1rem 0;
}
</style>