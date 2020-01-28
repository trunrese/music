<template>
  <div class="find">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
        <img :src="item.pic" @click="tosing(item.targetId)" />
      </van-swipe-item>
    </van-swipe>

    <!-- 宫格 -->
    <!-- <van-grid :column-num="5">
            <van-grid-item icon="calender-o" style="color:red;background:red" text="每日推荐" />
            <van-grid-item icon="ecard-pay" text="歌单" />
            <van-grid-item icon="bar-chart-o" text="排行榜" />
            <van-grid-item icon="play-circle-o" text="电台" />
            <van-grid-item icon="video-o" text="直播" />
    </van-grid>-->
    <div class="gong">
      <div>
        <div class="icon">
          <van-icon name="calender-o" size="24px" color="#fff" />
        </div>
        <p>每日推荐</p>
      </div>
      <div @click="tosongfeilei">
        <div class="icon">
          <van-icon name="ecard-pay" size="24px" color="#fff" />
        </div>
        <p>歌单</p>
      </div>
      <div>
        <div class="icon" @click="topaihanglist">
          <van-icon name="bar-chart-o" size="24px" color="#fff" />
        </div>
        <p>排行榜</p>
      </div>
      <div>
        <div class="icon">
          <van-icon name="play-circle-o" size="24px" color="#fff" />
        </div>
        <p>电台</p>
      </div>
      <div>
        <div class="icon">
          <van-icon name="video-o" size="24px" color="#fff" />
        </div>
        <p>直播</p>
      </div>
    </div>

    <!-- 歌单 -->

    <h3>官方歌单</h3>

    <ul class="songsheet">
      <li v-for="item in songsheetList" :key="item.id" @click="tosongsheetdetail(item.id)">
        <img :src="item.coverImgUrl" />
        <span>{{item.name}}</span>
      </li>
    </ul>

    <h3>推荐歌单</h3>
    <div class="songlist">
      <div
        v-for="item in songList"
        :key="item.id"
        class="songsan"
        @click="tosongsheetdetail(item.id)"
      >
        <img :src="item.picUrl" />
        <span>{{item.name}}</span>
      </div>
    </div>

    <!-- 最新推荐 -->
    <h3>最新推荐</h3>
    <ul class="singlist">
      <li v-for="(item,index) in singList" :key="item.id" @click="tosing(item.id)">
        <span>{{index+1}}</span>
        <img :src="item.picUrl" />
        <span class="aaa">{{item.name}}</span>
      </li>
    </ul>

    <p class="di">小主，已经到底了哟~ o(*￣▽￣*)o</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      bannerList: "",
      songsheetList: "",
      singList: "",
      songList: ""
    };
  },
  mounted() {
    //轮播图
    axios.get("http://localhost:3000/banner?type=2").then(res => {
      //console.log(res)
      this.bannerList = res.data.banners;
    }),
      //歌单
      axios
        .get("http://localhost:3000/top/playlist/highquality?limit=8")
        .then(res => {
          //console.log(res)
          this.songsheetList = res.data.playlists;
        });
    //推荐歌曲
    axios.get("http://localhost:3000/personalized/newsong").then(res => {
      //console.log(res)
      this.singList = res.data.result;
    });
    //推荐歌单
    axios.get("http://localhost:3000/personalized?limit=15").then(res => {
      //console.log(res)
      this.songList = res.data.result;
    });
  },
  methods: {
    tosing(id) {
      //console.log(id)
      if (id) {
        this.$store.commit("tosing", id);
        window.location.reload();
      }
    },
    tosongsheetdetail(id) {
      this.$router.push({
        name: "songsheetdetail",
        query: {
          id: id
        }
      });
      this.$store.commit("tosong", id);
    },
    tosongfeilei() {
      this.$router.push({
        name: "songfeilei"
      });
    },
    topaihanglist() {
      this.$router.push({
        name: "paihanglist"
      });
    }
  }
};
</script>
<style scoped>
.find {
  margin-bottom: 80px;
}
img {
  width: 100%;
  height: 100%;
}
.gong {
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.gong div {
  width: 20%;
  height: 72px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.gong div p {
  margin: 0;
  padding: 0;
}
.gong div .icon {
  width: 40px;
  height: 40px;
  background-color: rgb(18, 247, 106);
  margin-left: 25%;
  border-radius: 50%;
}
.songsheet {
  height: 30%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
}
.songsheet li {
  width: 30%;
  height: 100%;
  margin: 10px;
}
.songsheet li img {
  width: 100px;
  height: 100px;
}
.songsheet li span {
  display: block;
  height: 28px;
  font-size: 13px;
  width: 100px;
  line-height: 14px;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
::-webkit-scrollbar {
  display: none;
}
h3 {
  margin-left: 10px;
}
.singlist li img {
  width: 60px;
  height: 60px;
  float: left;
}
.singlist li {
  width: 90%;
  height: 60px;
  margin-left: 5%;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.singlist li span:first-child {
  display: block;
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: orangered;
  line-height: 60px;
  float: left;
  text-align: center;
}
.singlist li .aaa {
  display: block;
  width: 50%;
  height: 60px;
  float: left;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  /* font-size: 24px; */
  color: #0094ff;
  font-weight: 800;
}
.songsan {
  width: 33%;
  height: 150px;
  float: left;
}
.songsan img {
  width: 80%;
  height: 80px;
  padding: 0 10%;
}
.songlist span {
  display: block;
  height: 70px;
  width: 80%;
  padding: 0 10%;
  font-size: 14px;
}
.songlist {
  width: 100%;
}
.di {
  width: 100%;
  text-align: center;
  color: #333;
}
</style>