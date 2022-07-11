<template>
    <div class="buttonBox">
        <div @click="loading = !loading">
            <slot></slot>
        </div>
        <div class="relative">
            <transition name="el-zoom-in-top">
                <div v-show="loading" class="dialogBox transition-box"
                    :style="{ 'width': width + 'px', 'height': height + 'px' }">
                    <slot name="dialogBox"></slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 720
        },
        height: {
            type: Number,
            default: 400
        },
    },
    data() {
        return {
            loading: false
        }
    }
};
</script>

<style scoped lang="less">
.buttonBox {
    display: flex;
    flex-direction: column;

    .relative {
        position: relative;

        .dialogBox {
            position: absolute;
            padding: 15px 10px 0 16px;
            background: white;
            box-shadow: 0 0 30px 5px #cecdcd;
            overflow-y: scroll;
            z-index: 2;
        }
    }
}
</style>