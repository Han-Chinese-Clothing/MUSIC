<template>
    <div class="image">
        <el-image :src="image + '?param=100y100'" lazy>
            <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
            </div>
        </el-image>
        <div class="play">
            <i class="el-icon-video-play"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            require: true
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";
@imgWidth: 70px;

.image {
    width: @imgWidth;
    height: @imgWidth;
    position: relative;
    background-color: #d9d9d9;
}

.el-image {
    .el-image(@imgWidth);
}

.play {
    opacity: 0;
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 24px;
    top: 0;
    transition: all 0.2s;
    background: black;
    color: white;

    i {
        position: absolute;
        .absolutely-centered();
        transition: all 0.2s;
        cursor: pointer;

        &:hover {
            color: red;
        }
    }

    &:hover {
        z-index: 1;
        opacity: 0.8;
    }
}
</style>