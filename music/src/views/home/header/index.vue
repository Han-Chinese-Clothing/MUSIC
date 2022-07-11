<template>
    <el-container>
        <el-header>
            <Header ref="Header" @h_eader="searchShow"></Header>
        </el-header>
        <search-box ref="search-box" />
    </el-container>
</template>

<script>
import Header from "@/components/home/header/index.vue";
import searchBox from "@/components/searchBox/index.vue";
export default {
    components: {
        Header,
        searchBox
    },
    methods: {
        searchShow() {
            this.$refs["search-box"].dialogVisible = true;
        }
    }
}
</script>

<style scoped lang="less">
.el-header {
    background: #a8e6cf;
    color: #333;
    position: fixed;
    box-shadow: 0px 5px 5px rgb(180 180 180);
    width: 100%;
    z-index: 3;
}
</style>