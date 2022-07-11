<template>
    <div class="leftTop">
        <div class="avatar">
            <el-image :src="playlist.coverImgUrl" lazy>
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
        </div>
        <el-skeleton :rows="6" :loading="loading" animated class="skeleton">
            <template slot="template">
                <div>
                    <el-skeleton-item variant="h3" />
                    <el-skeleton-item variant="text" style="width: 50%;" />
                    <el-skeleton-item variant="text" style="width: 20%;margin: 14px 0;" />
                    <el-skeleton-item variant="text" style="width: 80%;margin: 12px 0;" />
                </div>
            </template>
            <template>
                <div class="info">
                    <h3>
                        {{ playlist.name }}
                    </h3>

                    <div class="user center">
                        <div class="userAvatar">
                            <el-image :src="playlist.creator.avatarUrl" lazy>
                                <div slot="placeholder" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </div>
                        <span class="userName">
                            {{ playlist.creator.nickname }}
                        </span>
                        <span class="createTime">
                            {{ dateFormat(playlist.createTime) }}创建
                        </span>
                    </div>
                    <div class="tag center">
                        <span>标签：</span>
                        <ul>
                            <li v-for="(item, index) in playlist.tags" :key="index">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="desc">
                        <ExpandCollapse class="text" :text="playlist.description" :length="300" />
                    </div>
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<script>
import { dateFormat } from '@/utils/utils'
import ExpandCollapse from '@/customization/ExpandCollapse.vue'
export default {
    props: {
        playlist: {
            type: Object,
            require: true
        },
        loading: {
            type: Boolean,
            require: true
        }
    },
    components: {
        ExpandCollapse
    },
    methods: {
        dateFormat,
    }
}
</script>

<style lang="less" scoped>
@import "~@assets/less/share.less";
@imgWidth: 200px;
@userImgWidth: 30px;

.leftTop {
    display: flex;
    min-height: @imgWidth;

    .avatar {
        width: @imgWidth;
        height: @imgWidth;
        border-radius: 5px;
        overflow: hidden;

        .el-image {

            .el-image(@imgWidth, 18px, 30px);
        }


    }

    .skeleton {
        flex: 0.7;
        min-height: @imgWidth;
        margin-left: 10px;

        .el-skeleton {
            .el-skeleton__h3 {
                display: block;
                width: 50%;
                margin: 18px 0;
                height: 24px;
            }

            .el-skeleton__text {
                display: block;
                height: 20px;
            }
        }

        .info {
            display: flex;
            flex-direction: column;

            .user {

                span {
                    margin: 0 10px;
                }

                .userName,
                .createTime {
                    font-size: 14px;
                }

                .userAvatar {

                    width: @userImgWidth;
                    height: @userImgWidth;
                    border-radius: 25px;
                    overflow: hidden;
                    margin: 0 10px 0 0;

                    .el-image {

                        .el-image(@userImgWidth, 10px, 10px);
                    }
                }
            }
        }

        .tag {

            span,
            ul,
            li {
                font-size: 14px;
            }

            ul {
                display: flex;
                padding: 0;
            }

            li {
                margin: 0 5px;
            }
        }

        .desc {
            .text {
                font-size: 12px;

            }
        }
    }


}
</style>