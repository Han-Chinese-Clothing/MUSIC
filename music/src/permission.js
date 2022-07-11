import Vue from 'vue'
import router from './router'
import NProgress from 'nprogress'
const errorList = ['/404']
const params = ['/playlistDetails']
const home = '/'
NProgress.configure({
    showSpinner: false
})
router.beforeEach((to, from, next) => {
    if (errorList.indexOf(to.path) !== -1) {
        return next()
    }
    NProgress.start()
    if (params.indexOf(to.path) !== -1) {
        if (JSON.stringify(to.params) === '{}') {
            next({ path: home })
        }
    }
    next()
    NProgress.done()

})
router.afterEach(() => {
    NProgress.done()
})