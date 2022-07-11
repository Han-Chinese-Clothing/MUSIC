<template>
    <dialogBox>
        <slot></slot>
        <template slot="dialogBox">
            <loading :loading="loading">
                <div v-for="(item, key) in categories" :key="key">
                    <h6><i :class="icon[key]"></i><span>{{ item }}</span></h6>
                    <div>
                        <ul>
                            <li v-for="(item, index) in getSub(sub, key)" @click="setSelected(item)" :key="index"
                                :class="{ 'background': getClassName(item.name) }">
                                {{ item.name }}</li>
                        </ul>
                    </div>
                </div>
            </loading>
        </template>
    </dialogBox>
</template>

<script>
import dialogBox from "@/components/dialogBox/index.vue";
import { getAction } from "@/api/manage";
import loading from "@/customization/loading.vue";
export default {
    props: {
        name: {
            type: String,
            require: true
        }
    },
    components: {
        dialogBox,
        loading
    },
    data() {
        return {
            url: {
                catlist: '/playlist/catlist'
            },
            loading: false,
            categories: {},
            sub: [],
            icon: {
                0: 'iconfont icon-ziyuan',
                1: 'iconfont icon-changpian',
                2: 'iconfont icon-changjingguanli',
                3: 'iconfont icon-qingganganqing',
                4: 'iconfont icon-zhuti'
            }
        }
    },
    created() {
        this.getCatlist();
    },
    methods: {
        getClassName(value) {
            return this.name === value;
        },
        getSub(aim, category) {
            return aim.filter(e => e.category.toString() === category);
        },
        getCatlist() {
            this.loading = true
            getAction(this.url.catlist).then((res) => {
                if (res.categories) this.categories = res.categories;
                if (res.sub) this.sub = res.sub;
            }).finally(() => {
                this.loading = false;
            });
        },
        setSelected(item) {
            this.$emit("setSelected", item);
        },
    }
}
</script>

<style scoped lang="less">
@import "~@assets/icon/iconfont.css";

h6 {
    display: flex;
    align-items: center;

    span {
        margin-left: 10px;
    }
}

ul {
    display: flex;
    margin: 0px;
    flex-wrap: wrap;
    align-items: center;

    li {
        cursor: pointer;
        padding: 0 15px;
        background-color: #e2e0e0;
        border: 1px solid transparent;
        border-radius: 25px;
        transition: all 0.5s;
        font-size: 0.8rem;
        margin: 5px 15px;
    }

    .background {
        background: #a8e6cf;
    }
}
</style>