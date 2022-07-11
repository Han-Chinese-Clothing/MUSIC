<template>
  <div class="main">
    <play-list
      :dataSource="featureList"
      :loading="loading"
      :showNum="true"
      :minHeight="100"
    >
      <template slot="title">
        <h1>云音乐特色榜</h1>
      </template>
    </play-list>
    <play-list :dataSource="globalList" :loading="loading" :showNum="true">
      <template slot="title">
        <h1>全球媒体榜</h1>
      </template>
    </play-list>
  </div>
</template>

<script>
import PlayList from "@/customization/playList";
import { getAction } from "@/api/manage";
export default {
  data() {
    return {
      url: {
        toplist: "/toplist/detail",
      },
      dataSource: [],
      loading: false,
    };
  },
  components: {
    PlayList,
  },
  computed: {
    featureList: function () {
      return this.dataSource.slice(0, 4);
    },
    globalList: function () {
      return this.dataSource.slice(4, this.dataSource.length);
    },
  },
  created() {
    this.getTopList();
  },
  methods: {
    getTopList() {
      this.loading = true;
      getAction(this.url.toplist)
        .then((res) => {
          if (res.list) {
            let arr = res.list.map((e) => {
              e = {
                id: e.id,
                name: e.name,
                picUrl: e.coverImgUrl,
                playCount: e.playCount,
              };
              return e;
            });
            this.dataSource = arr;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.main {
  width: 1200px;
  margin: auto;
}
</style>