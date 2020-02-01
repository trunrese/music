<template>
  <div class="songfeilei">
    <van-nav-bar title="歌单分类" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="top">
      <div class="songbox">
        <div
          v-for="item in songfeileilist"
          :key="item.id"
          class="listbox"
          @click="todetail(item.category,item.name)"
        >
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      songfeileilist: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    todetail(id, name) {
      this.$router.push({
        name: "songfeileidetail",
        query: {
          cat: id,
          name: name
        }
      });
    }
  },
  mounted() {
    axios.get("http://localhost:3000/playlist/catlist").then(res => {
      //console.log(res)
      this.songfeileilist = res.data.sub;
    });
  }
};
</script>
<style scoped>
.songfeilei {
  overflow: hidden;
  margin-bottom: 80px;
}
.listbox {
  width: 30vw;
  height: 30vw;
  background-color: #0094ff;
  opacity: 0.7;
  float: left;
  margin: 1.667vw;
  color: #fff;
  text-align: center;
  line-height: 30vw;
  font-size: 24px;
  font-weight: 700;
}
.listbox:nth-of-type(2n) {
  color: #290211;
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
.top {
  margin-top: 46px;
}
</style>