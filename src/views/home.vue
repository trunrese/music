<template>
  <div class="home">
    <div class="nav">
      <p>我的</p>
      <div class="seach">
        <van-search
          background="rgba(0,0,0,0)"
          shape="round"
          :placeholder="a"
          v-model="value"
          right-icon
        />
      </div>
      <span>
        <van-icon size="2rem" name="wap-nav" />
      </span>
    </div>
    <div class="presonal">
      <div class="presonal_s">
        <p>
          <van-icon @click="register" size="20px" name="friends-o" />
        </p>
        <span>
          <van-icon size="20px" name="envelop-o" />
        </span>
      </div>
      <hr />
      <div class="presonal_x">
        <span>活动中心</span>
        <em>会员中心</em>
      </div>
    </div>
    <van-grid :border="false">
      <van-grid-item icon="like-o" text="喜欢" />
      <van-grid-item icon="underway-o" text="最近" />
      <van-grid-item icon="down" text="本地歌曲" />
      <van-grid-item icon="passed" text="已购" />
    </van-grid>
    <div class="classify">
      <div class="top">
        <h4>智能分类</h4>
      </div>
      <div class="bom">
        <div>经典金曲</div>
        <div>治愈</div>
        <div>约会</div>
        <div>ACG</div>
        <div>薛之谦</div>
        <div>
          <van-icon size="20px" name="more-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      value: "",
      a: "陪你度过漫长岁月"
    };
  },
  methods: {
    register() {
      this.$router.push({ name: "register" });
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.home {
  padding: 0 5vw;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.seach {
  width: 60vw;
}
.presonal {
  height: 10rem;
  background: white;
}
.presonal_s {
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.presonal_s > p {
  margin-left: 2rem;
}
.presonal_s > span {
  margin-right: 2rem;
}
.presonal_x {
  height: 5.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.presonal_x > span {
  margin-left: 2rem;
}
.presonal_x > em {
  font-style: normal;
  margin-right: 2rem;
}
.classify {
  height: 4rem;
}
.classify > .top,
.classify > .bom {
  height: 2rem;
}
.classify > .top > h4 {
  margin: 0;
  text-align: left;
  text-indent: 1rem;
  line-height: 2rem;
}
.classify > .bom {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
