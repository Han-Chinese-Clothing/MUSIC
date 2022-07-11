<template>
  <div class="banner">
    <loading :loading="loading" :minHeight="200">
      <el-carousel
        indicator-position="none"
        arrow="never"
        :interval="4000"
        type="card"
        height="200px"
      >
        <el-carousel-item
          v-for="(item, index) in dataSource"
          :key="item.targetId + index"
        >
          <el-image :src="item.imageUrl" :title="item.typeTitle">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </loading>
  </div>
</template>

<script>
import { getAction } from "@/api/manage";
import Loading from "@/customization/loading";
export default {
  components: { Loading },
  data() {
    return {
      dataSource: [],
      url: {
        banner: "/banner",
      },
      loading: false,
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.loading = true;
      getAction(this.url.banner)
        .then((res) => {
          this.dataSource = res.banners;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";
.banner {
  margin-top: 20px;
}

.el-carousel__item {
  border-radius: 10px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-image {
  .el-image(200px,18px,30px);
}
</style>