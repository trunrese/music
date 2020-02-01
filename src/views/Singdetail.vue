<template>
  <div class="singdetail">
    <h3>歌曲详情</h3>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      singid: ""
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    this.singid = this.$route.query.id;
    axios
      .get("http://localhost:3000/song/detail?ids=" + this.singid)
      .then(res => {
        console.log(res);
      });
  }
};
</script>