<template>
    <eTable :dataSource="dataSource" :columns="columns" :loading="loading">
        <template slot="image" slot-scope="val">
            <div class="img-box">
                <eImage :image="val.record.image" />
                <Ellipsis :tooltip="val.text" location="top-start" :length="40" />
            </div>
        </template>
        <template slot="singer" slot-scope="val">
            <Ellipsis :tooltip="val.text" location="top-start" :length="20" />
        </template>
        <template slot="album" slot-scope="val">
            <Ellipsis :tooltip="val.text" location="top-start" :length="20" />
        </template>
    </eTable>
</template>

<script>
import eTable from '@/customization/eTable.vue'
import { songListColumns as columns } from '@/columns/index'
import eImage from '@/customization/eImage.vue'
import Ellipsis from '@/customization/Ellipsis.vue'
export default {
    props: {
        loading: {
            type: Boolean,
            require: true
        },
        dataSource: {
            type: Array,
            require: true
        }
    },
    components: {
        eTable,
        eImage,
        Ellipsis
    },
    data() {
        return {
            columns,
        }
    }
}
</script>

<style lang="less" scoped>
.img-box {
    display: flex;
    align-items: center;

    .image {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
    }

    h6 {
        margin: 0 0 0 5px;
    }
}

/deep/ .el-table__cell {
    padding: 0;
    height: 60px;

    >.cell {
        >h6 {
            margin: 0;
        }
    }
}
</style>