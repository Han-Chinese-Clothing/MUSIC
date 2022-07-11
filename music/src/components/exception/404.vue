<template>
    <el-empty :image-size="300" image="" description="404 未找到页面">
        <el-button type="primary" @click="goPage('/')">返回首页</el-button>
    </el-empty>
</template>

<script>
export default {
    methods: {
        goPage(path) {
            this.$router.push({ path: path });
        }
    }
}
</script>

<style lang="less" scoped>
.el-empty {
    margin-top: 10%;
}

/deep/ .el-empty__description p {
    font-size: 20px;
}
</style>