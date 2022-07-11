<template>
    <el-main v-loading="loading" :style="{ 'min-height': minHeight + 'px' }">
        <slot></slot>
    </el-main>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            require: true,
        },
        minHeight: {
            type: Number,
            require: false,
            default: 300
        }
    }
}
</script>

<style lang="less" scoped>
.el-main {
    padding: unset;
    flex: unset;
    flex-basis: unset;
    overflow: unset;
    box-sizing: unset;
}

/deep/ .el-loading-mask {
    z-index: 0;
}
</style>