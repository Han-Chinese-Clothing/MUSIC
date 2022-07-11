
import {
    Container,
    Header,
    Main,
    Footer,
    Carousel,
    CarouselItem,
    Image,
    Tooltip,
    Loading,
    MessageBox,
    Notification,
    Message,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Backtop,
    Pagination,
    Dialog,
    Autocomplete,
    Icon,
    Empty,
    Button,
    Skeleton,
    SkeletonItem,
    Table,
    TableColumn
} from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Image)
        Vue.use(Tooltip)
        Vue.use(Divider)
        Vue.use(Dropdown)
        Vue.use(DropdownItem)
        Vue.use(DropdownMenu)
        Vue.use(Backtop)
        Vue.use(Pagination)
        Vue.use(Dialog)
        Vue.use(Autocomplete)
        Vue.use(Icon)
        Vue.use(Empty)
        Vue.use(Button)
        Vue.use(Skeleton)
        Vue.use(SkeletonItem)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Loading.directive)

        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$message = Message;
    }
}
export default element