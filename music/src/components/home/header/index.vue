<template>
  <div class="header">
    <div class="logo">
      <router-link :to="{ path: '/' }"> </router-link>
    </div>
    <ul class="flex-row">
      <li>
        <router-link :to="{ name: 'homeMain' }"> 首页 </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'leaderboard' }"> 排行榜 </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'playlist' }"> 歌单 </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'singer' }"> 歌手 </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/404' }"> 视频 </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/404' }"> MV </router-link>
      </li>
      <li>
        <a href="https://gitee.com/isnt-that-killing" target="_blank" > GLTEE </a>
      </li>
    </ul>
    <div class="search">
      <i class="el-icon-search" @click="searchShow"></i>
    </div>
    <el-divider direction="vertical"></el-divider>
    <div class="userbox">
      <el-dropdown>
        <span class="el-dropdown-link">
          登录<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item><i class="el-icon-user one"></i>我的首页</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-message one"/>我的消息</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-setting one"/>个人设置</el-dropdown-item>
          <el-dropdown-item disabled></el-dropdown-item>
          <el-dropdown-item divided><i class="el-icon-switch-button one"/>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import { timeFix } from "@/utils/utils";
export default {
  components: {},
  created() {
    this.open();
  },
  methods: {
    searchShow() {
      this.$emit("h_eader");
    },
    open() {
      this.$notify({
        title: "系统提示",
        message: timeFix(),
        type: "success",
        duration: 5000,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;

  ul {
    flex: 1;

    li {
      font-size: 14px;
      height: 100%;
      padding: 0 15px;
      line-height: 32px;

      a {
        position: relative;
        transition: all 0.4s;
      }
    }
  }

  .logo {
    width: 60px;
    display: flex;
    align-items: center;
    margin-right: 30px;

    a {
      width: 100%;
      display: block;
      height: 60px;
      background-position: 0px center;
      background-repeat: no-repeat;
      background-size: 50px 50px;
      background-image: url("~@/assets/logo.png");
    }
  }

  .search {
    height: 100%;
    display: flex;
    align-items: center;

    i {
      font-size: 20px;
      color: #161e27;
      padding: 0 15px;
      margin-top: 5px;
      cursor: pointer;
    }
  }

  .userbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 20px;
  }
}

.router-link-exact-active {
  color: red;
}

.el-dropdown {
  color: black;
}

.el-backtop {
  color: white;
  background: #a8e6cf;
}

.one{
  margin-right:10px;
  margin-left:-10px ;
}
</style>