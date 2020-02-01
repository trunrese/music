<template>
  <div class="paihangdetail">
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <img :src="paihanglist.coverImgUrl" />
    <span>最近更新时间：{{paihanglist.updateTime | glq}}</span>
    <h3>排行歌曲</h3>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in paihangsinglist" :key="item.id" @click="tosing(item.id)">
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
      index: "",
      name: "",
      paihanglist: "",
      paihangsinglist: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.index = this.$route.query.index;
    this.name = this.$route.query.name;
    axios.get("http://localhost:3000/top/list?idx=" + this.index).then(res => {
      //console.log(res)
      this.paihangsinglist = res.data.playlist.tracks;
    });
    axios.get("http://localhost:3000/toplist").then(res => {
      //console.log(res)
      this.paihanglist = res.data.list[this.index];
    });
  },
  filters: {
    glq(timeStamp) {
      // let timeStamp=res.data.comments[i].time
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      return (
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss
      );
    }
  }
};
</script>
<style scoped>
.paihangdetail {
  margin-bottom: 80px;
  overflow: hidden;
}
img {
  display: block;
  width: 100%;
  height: 240px;
  opacity: 0.7;
  margin-top: 46px;
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
}
</style>