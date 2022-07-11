<template>
  <div class="page">
    <play-list :loading="loading" :dataSource="dataSource" :showNum="true" :minHeight="846" />
    <el-pagination background hide-on-single-page layout="prev, pager, next" :page-size="queryParam.limit"
      :total="queryParam.total" @current-change="currentChange" :current-page="queryParam.currentPage" />
      
  </div>
</template>

<script>
import playList from "@/customization/playList.vue";
export default {
  props: {
    loading: {
      type: Boolean,
      require: true,
    },
    dataSource: {
      type: Array,
      require: true,
    },
    queryParam: {
      type: Object,
      require: true,
    },
  },
  components: {
    playList,
  },
  methods: {
    currentChange(val) {
      this.$emit('currentChange', val);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-pagination.is-background .el-pager li {
  &:hover {
    color: #a8e6cf;
  }

  &:not(.disabled).active {
    background-color: #a8e6cf;
  }
}

.el-pagination {
  display: flex;
  justify-content: flex-end;
}
</style>