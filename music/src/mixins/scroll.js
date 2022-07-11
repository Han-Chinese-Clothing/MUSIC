export const Scroll = {
    data() {
        return {
            loading: false,
            noData: false,
        }
    },
    created() {
        this.getdataSource();
    },
    methods: {
        load() {
            var scrollTop = Math.ceil(document.documentElement.scrollTop);
            var innerHeight = window.innerHeight;
            var offsetHeight = document.documentElement.offsetHeight;
            let bottomOfWindow =
                scrollTop + innerHeight === offsetHeight ||
                scrollTop + innerHeight + 1 === offsetHeight ||
                scrollTop + innerHeight + 2 === offsetHeight;
            if (bottomOfWindow && this.loading == false && this.noData == false) {
                this.queryParam.offset += this.queryParam.limit;
                this.getdataSource();
            }
        },
        getdataSource() {
            console.log("此方法需要被重写！")
        }
    },
    mounted() {
        window.addEventListener("scroll", this.load);
        this.$on("hook:beforeDestroy", () => {
            window.removeEventListener("scroll", this.load);
        });
    },
}