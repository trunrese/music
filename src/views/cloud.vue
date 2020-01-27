<template>
  <div class="about">
    <div class="top">
      <h1 style="font-size:5vw;">推荐</h1>
      <div>
        <van-search shape="round" background="rgba(0,0,0,0)" :placeholder="msg" v-model="value" />
      </div>
      <div>
        <van-icon size="10vw" name="music" />
      </div>
    </div>
    <div class="Offlist">
      <h2>Hi {{username}},今日为你打造</h2>
      <div class="OL">
        <figure>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
            alt
          />
          <figcaption>欧美流行</figcaption>
        </figure>
        <figure>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
            alt
          />
          <figcaption>欧美流行</figcaption>
        </figure>
        <figure>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
            alt
          />
          <figcaption>欧美流行</figcaption>
        </figure>
      </div>
    </div>
    <div class="wailist">
      <div class="list">
        <h2>最近常听</h2>
        <div class="OL">
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
        </div>
      </div>
      <div class="list">
        <h2>符合你最近收听的音乐</h2>
        <div class="OL">
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
          <figure>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2500341420,640469444&fm=26&gp=0.jpg"
              alt
            />
            <figcaption>欧美流行</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "有幸",
      username: "木子"
    };
  }
};
</script>

<style  scoped>
.top,
.about {
  padding: 0 5vw;
  margin: 0;
  overflow-x: hidden;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 中间 */
.wailist {
  margin-top: 10vw;
  border-radius: 30%;
  background: #ffffff;
}
.OL {
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 1vw;
}
.Offlist {
  margin-top: 8vw;
}
.OL figure {
  margin: 0 3vw;
  padding: 0;
}
.Offlist h2 {
  text-align: center;
  font-size: 5vw;
}

.Offlist img,
.list img {
  width: 30vw;
}
.list h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 5vw;
}
</style>