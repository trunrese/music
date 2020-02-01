<template>
  <div class="songsheetdetail">
    <van-nav-bar left-text="歌单" left-arrow @click-left="onClickLeft" />
    <div class="top">
      <img :src="songsheetdetail.avatarUrl" />
      <div>
        <ul>
          <li v-for="item in songsheetdetail.expertTags" :key="item.id">
            <p>{{item}}/</p>
          </li>
        </ul>
        <div class="songtext">{{songsheetdetail.signature}}</div>
      </div>
    </div>
    <h3>歌单歌曲</h3>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in songList" :key="item.id" @click="tosing(item.id)">
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
      songid: "",
      songsheetdetail: "",
      songList: ""
    };
  },
  mounted() {
    //console.log(this.$route.query.id)
    this.songid = this.$store.state.song;
    axios
      .get("http://localhost:3000/playlist/detail?id=" + this.songid)
      .then(res => {
        console.log(res);
        this.songsheetdetail = res.data.playlist.creator;
        this.songList = res.data.playlist.tracks;
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tosing(id) {
      this.$store.commit("tosing", id);
      window.location.reload();
    }
  }
};
</script>
<style scoped>
.songsheetdetail {
  margin-bottom: 80px;
  overflow: hidden;
}
.top {
  margin-top: 46px;
}
.top img {
  display: block;
  width: 200px;
  height: 200px;
  margin-left: 10px;
}
/* .top{
    display: flex;
    justify-content: space-around;
    align-items: center
} */
.top ul {
  display: flex;
  justify-content: space-around;
}
.songtext {
  padding: 10px;
  color: #0094ff;
  line-height: 24px;
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
  width: 100%;
  position: fixed;
}
</style>