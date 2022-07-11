export function getPlayListQueryParam(cat = '全部') {
    return {
        limit: 32,
        total: 0,
        offset: 0,
        cat: cat,
        currentPage: 0,
    };
}
export function getSingerListParam() {
    return {
        offset: 0,
        limit: 40,
        // 分类
        type: -1,
        // 语种
        area: -1,
        // 字母A_Z
        initial: -1
    }
}