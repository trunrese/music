<template>
  <div class="home">
    <div class="top">
      <h1 style="font-size:5vw;">音乐馆</h1>
      <div>
        <van-search shape="round" background="rgba(0,0,0,0)" placeholder="我们的歌" v-model="value" />
      </div>
      <div>
        <van-icon size="10vw" name="music" />
      </div>
    </div>
    <div class="main">
      <div class="usermsg">
        <div class="active">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="http://img5.imgtn.bdimg.com/it/u=4251527860,874104653&fm=26&gp=0.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
                alt
              />
            </van-swipe-item>
            <van-swipe-item>
              <img src="http://img5.imgtn.bdimg.com/it/u=2308691045,3959994010&fm=26&gp=0.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2531130217,2974441494&fm=26&gp=0.jpg"
                alt
              />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="kind">
        <van-grid column-num="5" style=" margin-top:3vw; ">
          <van-grid-item icon="contact" text="歌手" />
          <van-grid-item icon="apps-o" text="排行" />
          <van-grid-item icon="apps-o" text="分类歌单" />
          <van-grid-item icon="home-o" text="电台" />
          <van-grid-item icon="service-o" text="一起听" />
        </van-grid>
      </div>
      <div class="Official">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2523235567,4009336127&fm=26&gp=0.jpg"
            alt
          />
          <p>
            <span>新歌推荐</span>
            简弘亦轻柔诉深情
          </p>
        </div>
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2523235567,4009336127&fm=26&gp=0.jpg"
            alt
          />
          <p>
            <span>新歌推荐</span>
            简弘亦轻柔诉深情
          </p>
        </div>
      </div>
      <div class="Offlist">
        <h2>
          官方歌单
          <span>
            更多
            <van-icon name="arrow" />
          </span>
        </h2>
        <div class="OL">
          <figure>
            <img src="http://img2.imgtn.bdimg.com/it/u=2845979809,2262862877&fm=11&gp=0.jpg" alt />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img src="http://img2.imgtn.bdimg.com/it/u=2845979809,2262862877&fm=11&gp=0.jpg" alt />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img src="http://img2.imgtn.bdimg.com/it/u=2845979809,2262862877&fm=11&gp=0.jpg" alt />
            <figcaption>欧美流行</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      value: "",
      img: "",
      msg: "JOJO",
      active: 0
    };
  }
};
</script>
/**scoped是指值在当前内有效 */
<style  scoped>
.top,
.main {
  padding: 0 5vw;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* banner图 */
.active img {
  width: 100%;
}
/* 两栏布局 中间的修饰 */
.Official {
  display: flex;
  justify-content: space-bettewn;
  font-size: 1vw;
  overflow-x: auto;
  width: 100%;
}
.Official img {
  width: 20vw;
  height: 15vw;
}
.Official p {
  margin-left: 3vw;
}
.Official p span {
  display: block;
  font-weight: 900;
}
.Official div,
.OL {
  display: flex;
  align-items: center;
  padding: 1vw;
}
.Offlist h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Offlist h2 span {
  font-size: 3vw;
}
.Offlist img {
  width: 30vw;
}
/* 官方歌单 */
.OL {
  overflow-x: auto;
}
.OL figure {
  margin: 0 3vw;
  padding: 0;
}
</style>