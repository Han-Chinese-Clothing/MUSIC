<template>
  <div class="recommend-music">
    <h1>推荐新歌曲</h1>
    <loading :loading="loading">
      <div class="list">
        <div class="music" v-for="(item, index) in dataSource" :key="item.id + index">
          <eImage :image="item.image" />
          <div class="musicDetail">
            <p class="musicName">{{ item.name }}</p>
            <p class="musicAuthor">{{ item.singer }}</p>
          </div>
          <p class="musicDuration">{{ formatSecondTime(item.duration) }}</p>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
import { getAction, getTimeAction } from "@/api/manage";
import { _normalizeSongs } from "@/utils/song";
import { formatSecondTime } from "@/utils/utils";
import Loading from "@/customization/loading.vue";
import eImage from "@/customization/eImage.vue";
export default {
  data() {
    return {
      dataSource: [],
      url: {
        newsong: "/personalized/newsong",
        songs: "/song/detail",
      },
      loading: false,
    };
  },
  components: {
    Loading,
    eImage
  },
  created() {
    this.getNewsong();
  },
  methods: {
    formatSecondTime,
    async getNewsong() {
      this.loading = true;
      let list = [];
      await getAction(this.url.newsong)
        .then((res) => {
          if (res.result) {
            let arr = res.result;
            arr.map((e) => {
              list.push(e.id);
            });
            this.getSongDetail(list);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async getSongDetail(sliceArr) {
      sliceArr = sliceArr.join(",");
      await getTimeAction(this.url.songs, { ids: sliceArr }).then((res) => {
        if (res.songs) {
          this.dataSource = _normalizeSongs(res.songs);
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;

  .music {
    flex: 0 0 50%;
    max-width: 50%;
    height: 80px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    .musicDetail {
      flex: 1;
      padding-left: 20px;

      .musicName {
        font-size: 14px;
        color: #333;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .musicAuthor {
        font-size: 12px;
        color: #666;
        font-weight: bold;
      }
    }

    .musicDuration {
      font-size: 14px;
      color: #333;
      font-weight: bold;
      margin-left: 80px;
    }
  }
}
</style>