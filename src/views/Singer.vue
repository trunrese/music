<template>
  <div class="singer">
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="singerimg">
      <img :src="singerimg" />
    </div>
    <div class="xinxi">
      <span>个人简介</span>
      <van-icon name="arrow-down" v-show="flag" @click="flag=!flag" />
      <van-icon name="arrow-up" v-show="!flag" @click="flag=!flag" />
    </div>
    <div class="text" v-show="!flag">
      <span>{{desc}}</span>
    </div>
    <h3>热门歌曲</h3>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in singersingList" :key="item.id" @click="tosing(item.id)">
          <div class="index">{{index+1}}</div>
          <div class="key">
            <div>{{item.name}}</div>
            <div>{{item.ar[0].name}}</div>
          </div>
        </li>
      </ul>
    </div>
    <p class="di">已经到底了~ o(*￣▽￣*)o</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      singerid: "",
      name: "",
      singerimg: "",
      singersingList: "",
      desc: "",
      flag: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tosing(id) {
      this.$store.commit("tosing", id);
      window.location.reload();
    }
  },
  mounted() {
    this.singerid = this.$route.query.id;
    this.name = this.$route.query.name;
    this.singerimg = this.$route.query.img;
    axios
      .get("http://localhost:3000/artist/desc?id=" + this.singerid)
      .then(res => {
        //console.log(res)
        this.desc = res.data.briefDesc;
      });
    axios
      .get("http://localhost:3000/artist/top/song?id=" + this.singerid)
      .then(res => {
        //console.log(res)
        this.singersingList = res.data.songs;
      });
  }
};
</script>
<style scoped>
.xinxi {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
}
.xinxi span {
  margin-right: 10px;
}
.text {
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  font-size: 14px;
  line-height: 24px;
}
.singer {
  overflow: hidden;
  margin-bottom: 80px;
}
.singerimg {
  width: 100%;
  height: 280px;
  margin-top: 44px;
}
img {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  position: fixed;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
  background: rgb(255, 255, 255);
}

.bottom ul {
  border-top: 1px solid #ccc;
  margin-top: 0;
  width: 100%;
}
.bottom {
  margin-top: 10px;
}
.bottom li {
  border-bottom: 1px solid #ccc;
  width: 90%;
  height: 60px;
  margin-left: 5%;
}
.bottom li .index {
  float: left;
  width: 40px;
  height: 60px;
  color: orange;
  font-size: 24px;
  line-height: 60px;
}
.bottom li .key {
  float: left;
  height: 60px;
  width: 80%;
}
.bottom li .key div {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  overflow: hidden;
  padding: 0 5px;
}
.bottom li .key div:first-child {
  font-size: 18px;
  color: orangered;
}
.bottom li .key div:last-child {
  font-size: 14px;
  color: #ccc;
}
h3 {
  margin-left: 10px;
}
.di {
  width: 100%;
  text-align: center;
  color: #333;
}
</style>