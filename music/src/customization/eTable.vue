<template>
    <el-table v-loading="loading" :data="dataSource" stripe style="width: 100%">
        <el-table-column v-for="(item) in columns" :key="item.dataIndex" :prop="item.dataIndex" :label="item.title"
            :type="item.type" :width="item.width" :align="item.align">
            <template slot-scope="scope">
                <slot v-if="item.slotName" :name="item.slotName" :text="scope.row[item.dataIndex]" :record="scope.row">
                </slot>
                {{ !item.slotName ? getText(scope, scope.row, item.dataIndex, item) : '' }}
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        dataSource: {
            type: Array,
            require: true
        },
        columns: {
            type: Array,
            require: true
        },
        loading: {
            type: Boolean,
            require: true
        }
    },
    methods: {
        getText(scope, val, key, item) {
            if (item.customRender) {
                return item.customRender(val[key])
            } else if (item.type) {
                return scope.$index + 1
            } else {
                return val[key]
            }
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .el-loading-mask {
    z-index: 1;
}
</style>