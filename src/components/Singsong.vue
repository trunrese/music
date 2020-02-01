<template>
  <div v-show="singdetail">
    <div class="sing">
      <van-card
        :desc="singsong.ar[0].name"
        :title="singsong.name"
        :thumb="singsong.al.picUrl"
        @click="tosingdetail"
        v-show="flag"
      />
    </div>
    <div class="singdetail" v-show="!flag">
      <van-nav-bar left-arrow @click-left="onClickLeft" :title="singsong.name" />
      <div class="main" @click="show=!show" v-show="!show">
        <div class="main_bottom">
          <img :src="singsong.al.picUrl" id="smallImg" @click="play" />
        </div>
        <div class="text1">{{proe}}</div>
        <div class="text">{{initNum}}</div>
        <div class="text2">{{next}}</div>
      </div>

      <div v-show="show" @click="show=!show" class="singtext">
        <!-- <li>{{next}}</li>
                      <li>{{initNum}}</li>
        <li>{{proe}}</li>-->
        <li v-for="item in singtext" :key="item.id">{{item}}</li>
      </div>
      <div class="bottom_top">
        <div>
          <van-icon name="like" color="#ccc" size="34px" v-show="xin" @click="xin=!xin" />
          <van-icon name="like" color="red" size="34px" v-show="!xin" @click="xin=!xin" />
        </div>
        <div>
          <van-icon name="down" size="34px" />
        </div>
        <div>
          <div class="ball"></div>
          <van-icon name="comment-o" size="44px" @click="tosays" />
        </div>
      </div>
      <div class="bottom">
        <div>
          <van-icon name="replay" size="24px" />
        </div>
        <div>
          <van-icon name="arrow-left" size="24px" />
        </div>
        <div>
          <van-icon name="play-circle-o" size="58px" v-show="stop" @click="bo" />
          <van-icon name="pause-circle-o" size="58px" v-show="!stop" @click="bostop" />
        </div>
        <div>
          <van-icon name="arrow" size="24px" />
        </div>
        <div>
          <van-icon name="other-pay" size="24px" />
        </div>
      </div>
    </div>
    <div class="audio">
      <audio id="mp3" :src="singurl" controls="controls" autoplay></audio>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      singsong: {
        ar: [
          {
            name: "王一博"
          }
        ],
        name: "原来你也在这里",
        al: {
          picUrl:
            "https://p2.music.126.net/lqL0xtUVSMY7zpeJPhogEw==/109951164623102435.jpg"
        }
      },
      singurl:
        "http://m7.music.126.net/20200122142024/c25bfabcf059f92b9056fff3b7d6269b/ymusic/0e59/515e/5209/93e968a365f4836e75cbecf8133aad99.flac",
      singid: "1396237984",
      singtext: "",
      wordsTime: "",
      nowTimeSecond: "",
      flag: true,
      next: "",
      proe: "",
      stop: false,
      xin: true,
      singdetail: "",

      details: { name: "", al: "", ar: [{ name: "" }] },
      wordsTime: [],
      initNum: "",
      show: false,
      timer: null,
      showShade: false,
      count: 0,
      value: 0,
      nowTimeSecond: 0,
      totalTimeSecond: 0,
      nowTime: "0:00",
      totalTime: "0:00",
      listFlag: false
    };
  },
  mounted() {
    clearInterval(this.timer);

    this.singdetail = this.$store.state.singdetail;
    // this.$store.state.sing
    // localStorage.getItem('sing')
    // console.log(document.getElementById("mp3").currentTime)

    //歌曲ID
    this.singid = this.$store.getters.getsingid;
    //console.log(this.singid)
    //获取歌曲ID详情
    axios
      .get("http://localhost:3000/song/detail?ids=" + this.singid)
      .then(res => {
        //console.log(res.data)
        if (res.data.songs[0]) {
          this.singsong = res.data.songs[0];
        }
      });
    //获取歌曲ID播放地址
    axios
      .get("http://localhost:3000/check/music?id=" + this.singid)
      .then(res => {
        //console.log(res)
        if (res.data.success == true) {
          axios
            .get("http://localhost:3000/song/url?id=" + this.singid)
            .then(res => {
              //console.log(res)
              if (res.data.data[0].url) {
                this.singurl = res.data.data[0].url;
              }
            });
        } else {
          alert(res.data.message);
        }
      });
    //获取歌词
    axios
      .get("http://localhost:3000/lyric?id=" + this.singid)
      .then(response => {
        //this.singtext=res.data.lrc.lyric
        //console.log(response)
        if (
          response.data.lrc &&
          response.data.lrc.lyric !== "" &&
          response.data.lrc.lyric.includes("[") &&
          response.data.lrc.lyric.includes("]")
        ) {
          //过滤数组中的空元素
          let arr = response.data.lrc.lyric.split("\n").filter((v, i) => {
            return v !== "";
          });
          // console.log(arr)
          //获取时间
          let arr0 = arr.map((v, i) => {
            return v.slice(v.lastIndexOf("[") + 1, v.lastIndexOf("]"));
          });
          let arr1 = arr.map((v, i) => {
            return v.split("]")[0].slice(1);
          });

          let getSecond = function(arr) {
            arr = arr.map((v, i) => {
              return v.split(":");
            });
            //转化为秒
            arr = arr.map((v, i) => {
              return v[0] * 60 + parseFloat(v[1]);
            });
            return arr;
          };
          arr0 = getSecond(arr0);
          arr1 = getSecond(arr1);
          //获取歌词
          let musicWords = arr.map((v, i) => {
            return v.slice(v.lastIndexOf("]") + 1);
          });
          let obj0 = {};
          let obj1 = {};
          for (let i = 0; i < arr0.length; i++) {
            obj0[arr0[i]] = musicWords[i];
            obj1[arr1[i]] = musicWords[i];
          }
          Object.assign(obj0, obj1);
          // console.log(obj0)
          this.wordsTime = Object.keys(obj0);
          this.singtext = Object.values(obj0);
        } else {
          this.wordsTime = [1000];
          this.singtext = ["没有获取到歌曲信息~"];
        }
        // console.log(this.wordsTime);
        // console.log(this.songWords);
      });
    this.showWords();
  },

  // updated(){
  //   axios.get('http://localhost:3000/song/detail?ids='+this.singid).then(res=>{
  //           console.log(res.data)
  //           if(res.data.songs[0]){
  //               this.singsong=res.data.songs[0]
  //           }
  //       })
  //       axios.get('http://localhost:3000/song/url?id='+this.singid).then(res=>{
  //           console.log(res)
  //           if(res.data.data[0].url){
  //             this.singurl=res.data.data[0].url
  //           }
  //       })
  // },
  watch: {
    // shipStatusArr: {
    //   handler(newValue, oldValue) {
    //     console.log(newValue, oldValue)
    //   },
    //   deep: true,
    //   immediate: true
    // }
    //  singid: function (newValue, oldVal) {
    //     console.log( newValue, oldVal )
    // }
  },
  methods: {
    onClickLeft() {
      this.flag = true;
      document.querySelector(".audio").style.width = "70%";
      document.querySelector(".audio").style.height = "30px";
      document.querySelector(".audio").style.position = "fixed";
      document.querySelector(".audio").style.bottom = "2px";
      document.querySelector("#mp3").style.width = "100%";
      document.querySelector("#mp3").style.marginLeft = "0px";
    },

    intoMinutes(time, result) {
      //分钟
      var minute = time / 60;
      var minutes = parseInt(minute);
      if (minutes < 10) {
        minutes = minutes;
      }
      //秒
      var second = time % 60;
      var seconds = Math.round(second);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (result == "nowTime") {
        this.nowTime = minutes + ":" + seconds;
      }
      if (result == "totalTime") {
        this.totalTime = minutes + ":" + seconds;
      }
    },

    showWords() {
      //设置定时器通过歌曲的播放时间判断应该显示哪句歌词
      this.timer = setInterval(() => {
        //旋转图片
        if (!document.getElementById("mp3").paused) {
          document.getElementById("smallImg").style.transform =
            "rotate(" + this.count + "deg)";
          this.count++;
        }
        //获取当前的播放时间
        this.nowTimeSecond = document.getElementById("mp3").currentTime;
        this.intoMinutes(this.nowTimeSecond, "nowTime");
        //判断应该显示哪句歌词
        for (let i = 0; i < this.singtext.length; i++) {
          if (this.singtext[i + 1]) {
            if (
              this.nowTimeSecond >= this.wordsTime[i] &&
              this.nowTimeSecond <= this.wordsTime[i + 1]
            ) {
              this.initNum = this.singtext[i];
              this.next = this.singtext[i + 1];
              this.proe = this.singtext[i - 1];
            }

            // else if(this.nowTimeSecond >= this.wordsTime[i]){
            //   this.next=this.singtext[i]
            //   // this.next=[...new Set(this.next)]
            //   //console.log(this.next)
            // }
            // else if(this.nowTimeSecond < this.wordsTime[i]){
            //   this.proe=this.singtext[i]
            //   //console.log(this.proe)
            // }
          }
        }
        //设置滑块的进度
        // this.value = (this.nowTimeSecond / this.totalTimeSecond) * 100;
        // //当歌曲播放完随机播放列表中的歌曲
        // if (this.nowTimeSecond !== 0) {
        //   if (this.nowTimeSecond == this.totalTimeSecond) {
        //     this.$emit(
        //       "to-parent",
        //       this.list[parseInt(Math.random() * this.list.length)].id,
        //       this.list
        //     );
        //   }
        // }
      }, 100);
    },
    tosingdetail() {
      this.flag = false;
      document.querySelector(".audio").style.width = "100%";
      document.querySelector(".audio").style.height = "8%";
      document.querySelector(".audio").style.position = "fixed";
      document.querySelector(".audio").style.bottom = "80px";
      document.querySelector("#mp3").style.width = "130%";
      document.querySelector("#mp3").style.marginLeft = "-30px";
    },
    play() {
      // document.getElementById("mp3").play();
    },
    bo() {
      this.stop = !this.stop;
      document.getElementById("mp3").play();
    },
    bostop() {
      this.stop = !this.stop;
      document.getElementById("mp3").pause();
    },
    tosays() {
      this.$router.push({
        name: "says"
      });
      // this.$store.commit('changesingdetailfalse')
      // this.singdetail=this.$store.state.singdetail
      this.flag = true;
      document.querySelector(".audio").style.width = "70%";
      document.querySelector(".audio").style.height = "30px";
      document.querySelector(".audio").style.position = "fixed";
      document.querySelector(".audio").style.bottom = "2px";
      document.querySelector("#mp3").style.width = "100%";
      document.querySelector("#mp3").style.marginLeft = "0px";
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style>
/* .main img{
    width: 60px;
    height: 60px;
    background: #fff;
    
  } */

.van-card__title {
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  font-size: 14px;
  color: orange;
}
.van-card__thumb img {
  width: 80%;
  height: 80%;
}
.van-card__desc {
  max-height: 20px;
  color: #646566;
  line-height: 20px;
  margin-top: 6px;
  font-size: 14px;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  display: block;
  width: 80%;
  height: 80%;
}
.sing {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #0094ff;
}
.audio {
  width: 70%;
  height: 30px;
  position: fixed;
  bottom: 2px;
  right: 5px;
  background-color: #fff;
  overflow: hidden;
  z-index: 1000;
}
#mp3 {
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 60%;
}
.main_bottom {
  width: 200px;
  height: 200px;
  background-color: #000;
  border-radius: 50%;
  margin-left: 80px;
  margin-top: 30px;
}
.main_bottom img {
  width: 70%;
  height: 70%;
  margin-left: 15%;
  margin-top: 15%;
  border-radius: 50%;
  transition: 1s 1s height ease;
}
.singdetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #fff;
}
.text {
  text-align: center;
  color: orange;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}
.text1 {
  text-align: center;
  color: #ccc;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
}
.text2 {
  text-align: center;
  color: #ccc;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}
.singtext {
  margin-top: 50px;
  width: 100%;
  height: 57%;
  /* background-color: #94ff00; */
  overflow: auto;
  /* color: #fff */
}
.singtext li {
  list-style: none;
  text-align: center;
  margin: 15px 0;
}
.bottom {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
}
.bottom_top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  position: fixed;
  right: 35px;
  bottom: 165px;
  z-index: 10000;
}
.main {
  width: 100%;
  height: 60%;
  margin-top: 16px;
}
</style>
