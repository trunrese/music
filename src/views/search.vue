<<template>
    <div class="search">
        <van-nav-bar
            title="搜索"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

        <van-search placeholder="请输入搜索关键词" v-model="value" @input="singinput"/>
                <!-- <van-cell
                    v-for="item in list"
                    :key="item.id"
                    :title="item.name"
                    @click="tosing(item.id)"
                /> -->
            <ul v-show="flag" class="guan">
                <li v-for="item in list" :key="item.id" @click="tosearchdetail(item.keyword)">
                    {{item.keyword}}
                </li>
            </ul>
            <div>
                <h3>热搜榜</h3>
                <ul class="hot">
                    <li v-for="(item,index) in hotlist" :key="item.id" @click="tosearchdetail(item.searchWord)">
                        <span>{{index+1}}</span>
                        <span>{{item.searchWord}}</span>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      list: [],
      hotlist: "",
      flag: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    singinput() {
      if (this.value == "") {
        this.list = "";
        this.flag = false;
      } else {
        this.flag = true;
        axios
          .get(
            "http://localhost:3000/search/suggest?keywords=" +
              this.value +
              "&type=mobile"
          )
          .then(res => {
            //console.log(res)
            this.list = res.data.result.allMatch;
          });
      }
    },
    // tosing(id){
    //     this.$store.commit('tosing',id)
    //     window.location.reload()
    // }
    tosearchdetail(keyword) {
      this.flag = false;
      this.value = keyword;
      this.$router.push({
        name: "searchdetail",
        query: {
          keyword: keyword
        }
      });
    }
  },
  mounted() {
    axios.get("http://localhost:3000/search/hot/detail").then(res => {
      //console.log(res)
      this.hotlist = res.data.data;
    });
  }
};
</script>
<style scoped>
.search {
  padding-bottom: 82px;
}
.hot li {
  margin: 20px;
}
.hot li span:first-child {
  color: orange;
  font-size: 24px;
  padding: 0 10px;
}
.hot li span:last-child {
  color: #000;
  font-size: 18px;
}
h3 {
  margin-left: 10px;
}
.guan {
  width: 80%;
  position: fixed;
  top: 90px;
  left: 10%;
  background-color: orange;
  opacity: 0.9;
}
.guan li {
  border-bottom: 1px solid #94ff00;
  padding: 10px;
}
</style>