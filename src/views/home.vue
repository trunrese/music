<template>
  <div class="home">
    <div class="top">
      <div>我的</div>
      <div>
        <van-search
          shape="round"
          background="rgba(0,0,0,0)"
          placeholder="请输入搜索关键词"
          v-model="value"
        />
      </div>
      <div>
        <van-icon size="10vw" name="wap-nav" />
      </div>
    </div>
    <div class="main">
      <div class="user">
        <span>
          <van-image
            style="display:block;
        margin-left:5vw;
        margin-right:3vw;"
            round
            width="5rem"
            height="5rem"
            src="http://img0.imgtn.bdimg.com/it/u=2742913999,1742817843&fm=26&gp=0.jpg"
          />
          {{msg}}
        </span>
        <van-icon size="10vw" name="envelop-o" />
      </div>
      <div class="usermsg">
        <div class="active">
          <span>
            <van-icon size="8vw" name="bookmark" />
          </span>
          <span>
            <h2>活动中心</h2>
            <p class="gray">立即签到</p>
          </span>
        </div>
        <div class="active">
          <span>
            <van-icon size="8vw" name="gem-o" />
          </span>
          <span>
            <h2>会员中心</h2>
            <p class="gray">千万专属曲库任性享</p>
          </span>
        </div>
      </div>
      <div class="kind">
        <van-grid style=" margin-top:3vw; ">
          <van-grid-item icon="like-o" text="喜欢" />
          <van-grid-item icon="clock-o" text="最近" />
          <van-grid-item icon="down" text="本地歌曲" />
          <van-grid-item icon="passed" text="以购" />
        </van-grid>
        <div class="known">
          <h3>智能分类</h3>
          <span>听歌周榜</span>
          <span>王力宏</span>
          <span>情歌</span>
          <span>梁静茹</span>
          <p>...</p>
        </div>
      </div>
      <div class="mysong">
        <div style="width:100%">
          <van-tabs v-model="active">
            <van-tab title="自建歌单">
              <van-card
                desc="20首，10首已下载"
                title="2020"
                thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3016511076,1495638641&fm=11&gp=0.jpg"
              />
              <van-card
                desc="35首，18首已下载"
                title="02"
                thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3047553790,2037325466&fm=26&gp=0.jpg"
              />
              <van-card
                desc="42首，22首已下载"
                title="02"
                thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2845979809,2262862877&fm=11&gp=0.jpg"
              />
            </van-tab>
            <van-tab title="收藏歌单">
              <van-card
                desc="20首，20首已下载"
                title="晚安"
                thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2845979809,2262862877&fm=11&gp=0.jpg"
              />
            </van-tab>
          </van-tabs>
        </div>
        <div class="m-right">
          <van-icon size="5vw" name="add-square" />
          <van-icon size="5vw" name="bars" />
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
      msg: "木子",
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
.user span,
.user {
  display: flex;
  align-items: center;
}
.user {
  justify-content: space-between;
  background: #ffffff;
}
.usermsg {
  background: #ffffff;
  display: flex;
  margin-top: 1vw;
}

.active {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3vw;
}
.known span,
.known p {
  border: 0.3vw solid #333;
  padding: 0.7vw;
  border-radius: 50%;
  margin: 0;
  font-size: 4vw;
  margin-right: 2vw;
}
.known p {
  display: inline-block;
  border-radius: 50%;
}
.known h3 {
  font-size: 4vw;
  text-align: left;
}

.m-right {
  width: 15%;
}
.mysong,
.m-right {
  display: flex;
  justify-content: space-between;
}
.m-right {
  align-items: top;
  margin-top: 4vw;
}
</style>