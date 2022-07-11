<template>
    <div class="main">
        <div class="detail">
            <div class="playlistDetail">
                <leftTop :playlist="playlist" :loading="loading" />
                <songList :dataSource="dataSource" :loading="songLoading" />
            </div>
            <div class="other">
                <div class="comments">

                </div>
                <div class="recommend">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAction, postTimeAction } from '@/api/manage'
import leftTop from '@/components/playlistDetail/leftTop/index.vue'
import songList from '@/components/playlistDetail/songList/index.vue'
import { _normalizeSongs } from "@/utils/song";

export default {
    components: {
        leftTop,
        songList
    },
    data() {
        return {

            url: {
                playlist: '/playlist/detail',
                songList: '/song/detail'
            },
            id: this.$route.params.id,
            dataSource: [],
            queryParam: {
                ids: ''
            },
            playlist: {
                coverImgUrl: '',
                creator: { avatarUrl: '', nickname: '' }
            },
            loading: false,
            songLoading: false
        }
    },
    created() {
        this.load()
    },
    methods: {
        async load() {
            this.loading = true
            this.songLoading = true
            let list = []
            await getAction(this.url.playlist, { id: this.id }).then((res) => {
                if (res.playlist) {
                    this.playlist = res.playlist
                    this.playlist.trackIds.map((e) => { list.push(e.id) })
                }
            }).finally(() => {
                this.loading = false
            })
            await this.getSongDetail(list)
        },
        async getSongDetail(sliceArr) {

            this.queryParam.ids = sliceArr.join(",");
            await postTimeAction(this.url.songList, this.queryParam).then((res) => {
                if (res.songs) {
                    this.dataSource = _normalizeSongs(res.songs);
                }
            }).finally(() => {
                this.songLoading = false
            })
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 1200px;
    margin: auto;

    .detail {
        display: flex;
        flex-direction: row;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);

        .playlistDetail {
            display: flex;
            flex-direction: column;
            flex: 1;

        }
    }
}
</style>