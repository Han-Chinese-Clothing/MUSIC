<template>
  <ul class="list">
    <li v-for="(item) in dataSource" :key="item.id">
      <div class="avatar">
        <div class="image">
          <el-image :src="item.img1v1Url + '?param=100y100'" lazy>
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
      <div class="info">
        <ellipsis :tooltip="item.name" :length="8"></ellipsis>
        <p class="count">单曲数：{{ item.musicSize }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import Ellipsis from "@/customization/Ellipsis";
export default {
  components: {
    Ellipsis,
  },
  props: {
    dataSource: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";
@imgWidth: 93px;

.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px 0;
  padding: 0;
  li {
    padding: 0 15px 30px;
    flex: 0 0 10%;
    max-width: 10%;
    .avatar {
      border-radius: 50%;
      background-color: #d9d9d9;
      .image {
        width: @imgWidth;
        height: @imgWidth;
        position: relative;
        background-color: #d9d9d9;
        overflow: hidden;
        border-radius: 50%;
      }
    }
    .info {
      margin-top: 15px;
      text-align: center;

      > h6 {
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        word-break: break-word;
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      .count {
        font-size: 12px;
        margin-top: 10px;
        color: #fa2800;
      }
    }
  }
}

.el-image {
  .el-image(@imgWidth);
}
</style>