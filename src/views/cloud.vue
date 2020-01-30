<template>
  <div class="yuncun">
    <div class="singer">
      <!-- <div class="left">
                <ul>
                    <li
                    v-for="item in items"
                    :key="item.pst"
                    >
                    {{item.text}}
                    </li>
                </ul>
      </div>-->
      <!-- <div class="right">
                <div v-for="item in singerList" :key="item.id" class="right_div">
                    <div>{{item.name}}</div>
                </div>
      </div>-->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="p in items"
          :key="p.pst"
          :title="p.text"
          @click="changetab(p.pst)"
        />
      </van-sidebar>
      <div class="singerName">
        <!-- <van-loading type="spinner" style="text-align:center;" v-show="showLoading" /> -->
        <!-- <div style="text-align:center;color:#aaa;" v-show="error" @click="reload">加载失败点击重试~</div> -->
        <van-card
          v-for="(item,i) in singerList"
          :key="i"
          :title="item.name"
          :thumb="item.picUrl"
          @click="tosinger(item.id,item.name,item.picUrl)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showLoading: false,
      activeKey: 0,
      singerList: "",
      error: true,
      items: [
        { text: "入驻歌手", pst: "5001" },
        { text: "华语男歌手", pst: "1001" },
        { text: "华语女歌手", pst: "1002" },
        { text: "华语组合/乐队", pst: "1003" },
        { text: "欧美男歌手", pst: "2001" },
        { text: "欧美女歌手", pst: "2002" },
        { text: "欧美组合/乐队", pst: "2003" },
        { text: "日本男歌手", pst: "6001" },
        { text: "日本女歌手", pst: "6002" },
        { text: "日本组合/乐队", pst: "6003" },
        { text: "韩国男歌手", pst: "7001" },
        { text: "韩国女歌手", pst: "7002" },
        { text: "韩国组合/乐队", pst: "7003" },
        { text: "其他男歌手", pst: "4001" },
        { text: "其他女歌手", pst: "4002" },
        { text: "其他组合/乐队", pst: "4003" }
      ]
    };
  },
  methods: {
    changetab(index) {
      axios.get("http://localhost:3000/artist/list?cat=" + index).then(res => {
        //console.log(res)
        this.singerList = res.data.artists;
      });
    },
    tosinger(id, name, img) {
      this.$router.push({
        name: "singer",
        query: {
          id: id,
          name: name,
          img: img
        }
      });
    }
    // reload() {
    //     this.error = false;
    //     setTimeout(() => {
    //     this.changetab(index);
    //     }, 500);
    // },
  },
  mounted() {
    axios.get("http://localhost:3000/artist/list?cat=5001").then(res => {
      //console.log(res)
      this.singerList = res.data.artists;
    });
  }
};
</script>
<style scoped>
.yuncun {
  height: 100%;
}
.singer {
  overflow: auto;
  height: 100%;
  display: flex;
}
.singer .van-sidebar {
  width: 7.3em;
  overflow: auto;
  height: 100%;
}
[class*="van-hairline"]::after {
  border: 0;
}
.songs .van-nav-bar__title,
.songs .van-icon-arrow-left {
  color: #fff;
}
.singerName {
  flex: 1;
  text-align: center;
  height: 100%;
  overflow: auto;
  margin-bottom: 80px;
}
.singerName .van-card {
  background: #fff;
  border-bottom: 1px #eee solid;
  padding: 0 2em;
  height: 5em;
}
.singer .van-sidebar[data-v-3cee91e4][data-v-3cee91e4] {
  width: 7.3em;
  overflow: auto;
  height: 80%;
  position: fixed;
  left: 0;
  top: 50px;
  border-top: 1px solid #ccc;
}
/* .singerName .van-card__header,
.singerName .van-card__content {
  max-height: 5em;
  min-height: 5em;
} */
.singerName .van-card__thumb,
.singerName .van-image__img,
.singerName .van-image {
  width: 7em;
  max-height: 5em;
}
.singerName[data-v-3cee91e4][data-v-3cee91e4] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  height: 80%;
  width: 70%;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 50px;
  border-top: 1px solid #ccc;
  border-left: 1px solid olivedrab;
}
.singerName .van-card__title {
  line-height: 60px;
  max-height: 5em;
  font-size: 18px;
  color: #940000;
  font-weight: 700;
}
.singerName .van-card__thumb[data-v-3cee91e4],
.singerName .van-image__img[data-v-3cee91e4],
.singerName .van-image[data-v-3cee91e4] {
  width: 7em;
  max-height: 5em;
  padding-top: 2px;
}
/* .main{
    width: 100%;
    height: 100%;
    display: flex;
}
.main .left{
    flex: 2;
    height: 100%;
    overflow: auto;
}
.main .right{
    flex: 5;
    height: 100%;
    overflow: auto;
}
.right_div{
    height: 30px;
} */

.singerName[data-v-3cee91e4] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  height: 100%;
  width: 70%;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 50px;
  border-top: 1px solid #ccc;
  border-left: 1px solid olivedrab;
}
.singer .van-sidebar[data-v-3cee91e4] {
  width: 7.3em;
  overflow: auto;
  height: 100%;
  position: fixed;
  left: 0;
  top: 50px;
  border-top: 1px solid #ccc;
}
</style>