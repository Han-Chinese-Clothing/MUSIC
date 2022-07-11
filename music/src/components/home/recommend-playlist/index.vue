<template>
  <play-list :dataSource="dataSource" :loading="loading" :showNum="true">
    <template slot="title">
      <h1>推荐歌单</h1>
    </template>
  </play-list>
</template>

<script>
import { getAction } from "@/api/manage";
import playList from "@/customization/playList";
export default {
  data() {
    return {
      dataSource: [],
      url: {
        personalized: "/personalized",
      },
      data: {
        limit: 32,
      },
      loading: false,
    };
  },
  components: { playList },
  created() {
    this.getPersonalized();
  },
  methods: {
    getPersonalized() {
      this.loading = true;
      getAction(this.url.personalized, this.data)
        .then((res) => {
          if (res.result) {
            this.dataSource = res.result;
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
</style>