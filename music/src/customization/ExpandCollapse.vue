<script>
import { cutStrByFullLength, getStrFullLength } from '@/utils/utils'
export default {
    name: 'Ellipsis',
    props: {
        text: {
            type: String,
            require: true
        },
        length: {
            type: Number,
            default: 25,
        },
        className: {
            type: String,
            require: false
        }
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        getText() {
            this.show = !this.show
        }
    },
    render() {
        const { text, length, className, getText, show } = this
        if (text && getStrFullLength(text) > length) {
            return (
                <p class={className}>
                    {show ? text : cutStrByFullLength(text, length) + '…'}
                    <span onClick={getText} class="pointer" >
                        <i class={show ? 'el-icon-arrow-up' : 'el-icon-arrow-down'}>
                        </i>
                        {show ? '收起' : '展开'}
                    </span>
                </p >
            )
        } else {
            return (<p className={className}>{text}</p>)
        }
    }
}
</script>
<style lang="less" scoped>
.pointer {
    display: inline-block;
    cursor: pointer;
    color: red;
}
</style>