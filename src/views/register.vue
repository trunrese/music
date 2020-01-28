<template>
  <div class="register">
    <img src="http://img2.imgtn.bdimg.com/it/u=2129738617,337931467&fm=26&gp=0.jpg" alt />
    <h1>QQ音乐</h1>
    <van-field v-model="value" type="phone" label="手机号码" placeholder="请输入手机号" />
    <van-field v-model="captcha" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <van-field v-model="nickname" type="nickname" label="昵称" placeholder="请输入昵称" />
    <van-button type="default">注册</van-button>
  </div>
</template>
<script>
// import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      captcha: "",
      password: "",
      nickname: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3000/captcha/sent?phone=17337224735")
      .then(res => {
        console.log(res);
      });
  }
};
</script>
<style scoped>
.register img {
  width: 10rem;
  height: 10rem;
}
</style>
