<template>
  <div class="classify">
    <classify-list :loading="loading" :name="name" @setSelected="setSelected">
      <h4 @click="showBox">
        <Ellipsis :tooltip="name" :length="4" /><i
          :class="{ 'el-icon-arrow-down': !loading, 'el-icon-arrow-up': loading }"></i>
      </h4>
    </classify-list>
    <ul>
      <li>热门标签：</li>
      <li v-for="(item, index) in hotList" :key="item.id" :class="{ 'background': getClassName(item.name) }"
        @click="setSelected(item, index)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Ellipsis from "@/customization/Ellipsis.vue";
import classifyList from "@/components/classify/classifyList/index.vue";
export default {
  data() {
    return {
      name: "全部",
      loading: false
    };
  },
  props: {
    hotList: {
      type: Array,
      require: false,
      default: [],
    },
  },
  components: {
    Ellipsis,
    classifyList
  },
  methods: {
    getClassName(value) {
      return this.name === value;
    },
    setSelected(item) {
      this.name = item.name;
      this.$emit("click", this.name);
    },
    showBox() {
      this.loading = !this.loading;
    }
  },
};
</script>

<style lang="less" scoped>
.classify {
  display: flex;
  box-shadow: 0 0 15px 5px #cecdcd;
  padding: 15px;
  border-radius: 2px;

  h4 {
    display: flex;
    background: #a8e6cf;
    color: rgba(0, 0, 0, 0.85);
    padding: 5px 15px;
    border-radius: 2px;
    cursor: pointer;
    margin: 0px;
    height: 30px;
    width: 82.5px;
    justify-content: space-between;
    align-items: center;

    h6 {
      margin: 0px;
      white-space: nowrap;
      width: 36px;
    }

    i {
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    margin: 0px;
    flex-wrap: wrap;
    align-items: center;

    li {
      &:nth-child(1) {
        padding: 0 15px;
        font-size: 0.8rem;
      }

      &~li {
        cursor: pointer;
        padding: 0 15px;
        background-color: #e2e0e0;
        border: 1px solid transparent;
        border-radius: 25px;
        transition: all 0.5s;
        font-size: 0.8rem;
        margin: 5px 15px;
      }
    }

    .background {
      background: #a8e6cf;
    }
  }
}
</style>