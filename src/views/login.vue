<template>
  <div class="login">
    <img src="http://img2.imgtn.bdimg.com/it/u=2129738617,337931467&fm=26&gp=0.jpg" alt />
    <h1>QQ音乐</h1>
    <van-field v-model="value" type="phone" label="手机号码" placeholder="请输入手机号" />
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <van-button type="default">登录</van-button>
    <van-button type="default">注册</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
