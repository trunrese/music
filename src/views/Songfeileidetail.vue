<template>
  <div class="songfeileidetail">
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="top">
      <van-card
        v-for="item in songfeileidetailList"
        :key="item.id"
        :desc="item.name"
        :thumb="item.coverImgUrl"
        @click="tosongsheet(item.id)"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      songfeileiid: "",
      songfeileidetailList: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tosongsheet(id) {
      this.$router.push({
        name: "songsheetdetail"
      });
      this.$store.commit("tosong", id);
    }
  },
  mounted() {
    //console.log(this.$route.query.name)
    this.name = this.$route.query.name;
    this.songfeileiid = this.$route.query.cat;
    axios
      .get(
        "http://localhost:3000/top/playlist?limit=20&order=new&cat=" + this.name
      )
      .then(res => {
        //console.log(res)
        this.songfeileidetailList = res.data.playlists;
      });
  }
};
</script>
<style scoped>
.songfeileidetail {
  overflow: hidden;
  margin-bottom: 80px;
}
.top {
  margin-top: 46px;
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