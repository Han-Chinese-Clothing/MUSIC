<template>
  <el-dialog
    title=""
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-autocomplete
      v-model="state"
      suffix-icon="el-icon-search"
      popper-class="popper"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容，回车搜索"
      @select="handleSelect"
      @keyup.enter.native="okSelect"
      :popper-append-to-body="false"
    >
    </el-autocomplete>
    <div class="history">
      <h3>
        历史搜索
        <span class="empty" @click="empty"
          ><i class="el-icon-delete"></i>清空</span
        >
      </h3>
      <ul>
        <li v-for="(item, index) in historyList" :key="index">
          {{ item }}
          <span>
            <i class="el-icon-circle-close" @click="del(item)"></i>
          </span>
        </li>
      </ul>
    </div>
  </el-dialog>
</template>

<script>
import { getAction } from "@/api/manage";
import {
  setStoreList,
  getStoreList,
  removeStore,
  removeStoreList,
} from "@/utils/utils";
export default {
  data() {
    return {
      dialogVisible: false,
      url: {
        search: "/search",
      },
      state: "",
      dataSource: [],
      historyName: "history",
      historyList: getStoreList("history"),
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    querySearchAsync(queryString, cb) {
      getAction(this.url.search, { keywords: queryString }).then((res) => {
        if (res.code === 200) {
          if (res.result) {
            let arr = res.result.songs.map((e) => {
              e = {
                value: e.name,
                address: e.id,
              };
              return e;
            });
            this.dataSource = arr;
            cb(this.dataSource);
          }
        } else {
          cb([]);
        }
      });
    },
    okSelect() {
      this.historyList = setStoreList(this.historyName, this.state);
    },
    handleSelect(item) {
      this.historyList = setStoreList(this.historyName, item.value);
    },
    empty() {
      this.historyList = removeStore(this.historyName);
    },
    del(value) {
      this.historyList = removeStoreList(this.historyName, value);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";

/deep/ .el-dialog {
  @width: 790px;
  @height: 365px;
  width: @width !important;
  min-height: @height;
  position: relative;
  background-image: url("~@/assets/search.jpg");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50px;

  .el-dialog__body {
    .el-autocomplete {
      width: 100%;
    }
  }

  .history {
    width: 100%;
    padding: 20px;
    color: white;

    > h3 {
      display: flex;
      justify-content: space-between;

      span {
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }

    ul {
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        cursor: pointer;
        padding: 2px 5px;
        margin: 2px 5px;
        border-radius: 2px;
        background: #dcdee259;
        transition: all 0.2s;
        line-height: 20px;
        height: 25px;
        border-radius: 50px;
        i {
          transition: all 0.2s;
          line-height: 20px;

          &:hover {
            color: red;
          }
        }
      }
    }
  }
}

/deep/ .popper {
  .popper__arrow {
    display: none !important;
  }
}
</style>