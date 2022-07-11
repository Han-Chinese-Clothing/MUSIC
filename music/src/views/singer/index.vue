<template>
  <div class="main">
    <singer :dataSource="dataSource" />
    <loading v-show="!noData" :loading="loading" :minHeight="50" />
    <no-data :loading="noData" :minHeight="0" :description="'没有更多数据~'" />
  </div>
</template>

<script>
import singer from "@/customization/singer.vue";
import { getAction } from "@/api/manage";
import loading from "@/customization/loading.vue";
import { getSingerListParam } from "@/entity/index";
import { Scroll } from "@/mixins/scroll";
import NoData from "@/components/exception/noData.vue";

export default {
  components: {
    singer,
    loading,
    NoData,
  },
  mixins: [Scroll],
  data() {
    return {
      url: {
        artists: "/artist/list",
      },
      dataSource: [],
      queryParam: getSingerListParam(),
    };
  },
  methods: {
    getdataSource() {
      this.loading = true;
      getAction(this.url.artists, this.queryParam)
        .then((res) => {
          if (res.artists.length) {
            this.dataSource = this.dataSource.concat(res.artists);
          } else {
            this.noData = true;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style  lang="less" scoped>
.main {
  width: 1200px;
  margin: auto;
}
</style>