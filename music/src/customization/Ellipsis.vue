<script>
import { cutStrByFullLength, getStrFullLength } from '@/utils/utils'
export default {
    name: 'Ellipsis',
    props: {
        tooltip: {
            type: String,
            require: true
        },
        length: {
            type: Number,
            default: 25,
        },
        location: {
            type: String,
            default: 'right-end'
        }
    },
    render() {
        const { tooltip, length, location } = this.$props
        if (tooltip && getStrFullLength(tooltip) > length) {
            return (
                <el-tooltip class="item" effect="dark" content={tooltip} placement={location}>
                    <h6>{cutStrByFullLength(tooltip, length) + '…'}</h6>
                </el-tooltip>
            )
        } else {
            return (<h6>{tooltip}</h6>)
        }
    }
}
</script>