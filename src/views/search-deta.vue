<template>
  <div class="searchdetail">
    <van-nav-bar title="搜索详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class="top11">
      <li v-for="item in list" :key="item.id" @click="tosing(item.id)">
        <div>{{item.name}}</div>
        <div>{{item.artists[0].name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      list: []
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
    //console.log(this.$route.query.keyword)
    this.keyword = this.$route.query.keyword;
    axios
      .get("http://localhost:3000/search?keywords=" + this.keyword)
      .then(res => {
        //console.log(res)
        this.list = res.data.result.songs;
      });
  }
};
</script>
<style scoped>
.top11 {
  margin-top: 46px;
}
.searchdetail {
  padding-bottom: 82px;
  overflow: hidden;
}
li {
  margin: 0 20px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
li div:first-child {
  font-size: 18px;
  color: black;
}
li div:last-child {
  margin-left: 70%;
  color: #999;
}
li:nth-child(2n) {
  /* background-color: #9400ff; */
  color: black;
}
li:nth-child(2n + 1) {
  /* background-color: #0094ff; */
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