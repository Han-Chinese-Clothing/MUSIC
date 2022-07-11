<template>
  <div class="recommend-music">
    <slot name="title"></slot>
    <loading :loading="loading" :minHeight="minHeight">
      <div class="list">
        <div v-for="(item, index) in dataSource" :key="item.id + index">
          <div @click="goPage(item.id)">
            <div v-if="showNum" class="num">
              <i class="el-icon-caret-right"></i>
              {{ tranNumber(item.playCount, 2) }}
            </div>
            <el-image :src="item.picUrl" lazy>
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <ellipsis :tooltip="item.name" :length="30"></ellipsis>
          </div>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
import { tranNumber } from "@/utils/utils";
import Ellipsis from "@/customization/Ellipsis";
import Loading from "@/customization/loading";
export default {
  name: "playList",
  components: {
    Ellipsis,
    Loading,
  },
  props: {
    dataSource: {
      type: Array,
      require: true,
    },
    showTitle: {
      type: Boolean,
      require: true,
    },
    showNum: {
      type: Boolean,
      require: false,
      default: false,
    },
    loading: {
      type: Boolean,
      require: true,
    },
    minHeight: {
      type: Number,
      require: false,
      default: 300,
    },
  },
  methods: {
    tranNumber,
    goPage(id) {
      this.$router.push({ name: 'playlistDetails', params: { id: id } })
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";
@imgWidth: 132.5px;

.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;

  >div {
    flex: 0 0 12.5%;
    max-width: 12.5%;
    padding: 0 10px 25px 10px;
    border-radius: 10px;

    >div {
      cursor: pointer;
      box-shadow: 15px 15px 10px 0px rgb(0 0 0 / 20%),
        10px 10px 0px 0 rgb(0 0 0 / 14%), 5px 5px 0px 0 rgb(0 0 0 / 12%);
      position: relative;
      transition: all 0.2s;

      &:hover {
        box-shadow: 20px 20px 20px 0px rgb(0 0 0 / 25%),
          15px 15px 0px 0px rgb(0 0 0 / 20%), 10px 10px 0px 0 rgb(0 0 0 / 14%),
          5px 5px 0px 0 rgb(0 0 0 / 12%);
      }

      >.num {
        position: absolute;
        z-index: 1;
        top: 10px;
        background: black;
        color: white;
        padding: 0px 5px;
        font-size: 12px;
      }

      >h6 {
        margin: 0px;
        padding: 5px;
        min-height: 40px;
        text-indent: 1em;
      }
    }
  }
}

.el-image {
  .el-image(@imgWidth, 14px, 24px);
}
</style>