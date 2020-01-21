<template>
  <div class="regis">
    <input class="ipt1" type="text" placeholder="请输入你的手机号" />
    <br />
    <input class="ipt2" type="password" placeholder="请输入你的密码" />
    <br />
    <button>注册</button>
    <br />
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style scoped>
.regis {
  padding: 10rem 5vw;
}
.ipt1 {
  margin: 1rem 0;
}
</style>