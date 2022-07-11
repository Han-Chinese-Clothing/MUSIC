<template>
  <div class="main">
    <loading :loading="sifyLoading" :minHeight="60">
      <classify :hotList="hotList" @click="getPlayListCat" />
    </loading>
    <play-list-page :loading="playLoading" :queryParam="queryParam" :dataSource="dataSource"
      @currentChange="currentChange" />
  </div>
</template>

<script>
import classify from "@/components/classify";
import { getAction } from "@/api/manage";
import loading from "@/customization/loading";
import playListPage from "@/components/playListPage";
import { getPlayListQueryParam } from "@/entity/index";

export default {
  data() {
    return {
      url: {
        catist: "/playlist/catlist",
        hot: "/playlist/hot",
        playlist: "/top/playlist",
      },
      hotList: [],
      catistList: [],
      sifyLoading: false,
      playLoading: false,
      dataSource: [],
      queryParam: getPlayListQueryParam(),
    };
  },
  components: {
    loading,
    classify,
    playListPage
  },
  created() {
    this.getHot();
    this.getPlayList();
  },
  methods: {
    getHot() {
      this.sifyLoading = true;
      getAction(this.url.hot)
        .then((res) => {
          if (res.tags) {
            let arr = res.tags;
            arr = arr.map((e) => {
              e = {
                id: e.id,
                name: e.name,
                type: e.type,
              };
              return e;
            });
            this.hotList = arr;
            this.hotList.unshift({ id: "全部", name: "全部", type: "全部" });
          }
        })
        .finally(() => {
          this.sifyLoading = false;
        });
    },
    currentChange(val) {
      this.queryParam.currentPage = val;
      this.queryParam.offset = (val - 1) * this.queryParam.limit;
      this.getPlayList();
    },
    getPlayList() {
      this.dataSource = [];
      this.playLoading = true;
      this.$cancel();
      getAction(this.url.playlist, this.queryParam)
        .then((res) => {
          if (res.code == 200) {
            let arr = res.playlists;
            arr = arr.map((e) => {
              e = {
                id: e.id,
                name: e.name,
                picUrl: e.coverImgUrl,
                playCount: e.playCount,
              };
              return e;
            });
            this.dataSource = arr;
            this.queryParam.total = res.total;
          }
        })
        .finally(() => {
          this.playLoading = false;
        });
    },
    getPlayListCat(name) {
      this.queryParam = getPlayListQueryParam(name);
      this.getPlayList();
    },
  },
};
</script>

<style scoped lang="less" >
.main {
  width: 1200px;
  margin: auto;
}

.page {
  margin-top: 10px;
}
</style>