<template>
  <div id="app">
    <transition name="load" mode="out-in">
      <router-view />
    </transition>
    <router-view name="header" />
    <transition name="load" mode="out-in">
      <router-view name="main" />
    </transition>
    <router-view name="footer" />
  </div>
</template>

<style lang="less">
@import "~@assets/less/index.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  position: relative;
}
</style>
