<template>
  <el-main v-show="loading" :style="{ 'min-height': minHeight + 'px' }">
    <el-empty :description="description"></el-empty>
  </el-main>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "暂无数据",
    },
    loading: {
      typr: Boolean,
      require: true,
    },
    minHeight: {
      type: Number,
      default: 300,
    },
  },
};
</script>

<style scoped lang="less">
.el-main {
  padding: 0 20px;
  .el-empty {
    padding: 0;
    /deep/.el-empty__image {
      width: 60px;
    }
  }
}
</style>