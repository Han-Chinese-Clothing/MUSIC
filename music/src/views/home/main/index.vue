<template>
  <el-container>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">
.el-main {
  margin-top: 60px;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.fade-enter,
.fade-leave-to {

  opacity: 0;
  transform: translateX(10px);

}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.2s;
}
</style>