<template>
  <div class="recommend-music">
    <h1>推荐歌手</h1>
    <loading :loading="loading">
      <singer :dataSource="dataSource" />
    </loading>
  </div>
</template>

<script>
import { getAction } from "@/api/manage";
import Loading from "@/customization/loading";
import singer from "@/customization/singer.vue";
export default {
  data() {
    return {
      url: {
        artists: "/top/artists",
      },
      info: {
        offset: 0,
        limit: 30,
      },
      dataSource: [],
      loading: false,
    };
  },
  components: {
    Loading,
    singer,
  },
  methods: {
    getArtists() {
      this.loading = true;
      getAction(this.url.artists, this.info)
        .then((res) => {
          if (res.artists) {
            this.dataSource = res.artists;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.getArtists();
  },
};
</script>

<style lang="less" scoped>
</style>