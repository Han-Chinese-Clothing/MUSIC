export const constantRouterMap = [
    {
        path: '/',
        name: 'home',
        components: {
            header: () => import('@/views/home/header/index'),
            main: () => import('@/views/home/main/index'),
            footer: () => import('@/views/home/footer/index'),
        },
        children: [{
            path: '',
            name: 'homeMain',
            component: () => import('@/views/homeMain/index'),
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: () => import('@/views/leaderboard/index')
        },
        {
            path: '/playlist',
            name: 'playlist',
            component: () => import('@/views/playlist/index')
        },
        {
            path: '/singer',
            name: 'singer',
            component: () => import('@/views/singer/index')
        },
        {
            path: '/playlistDetails',
            name: 'playlistDetails',
            component: () => import('@/views/playlistDetails/index')
        }
        ]
    },
    {
        path: '/user/login',
        name: 'login',
        components: {
            default: () => import('@/components/exception/noData')
        }
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/components/exception/404')
    }
]