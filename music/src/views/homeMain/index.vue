<template>
    <div class="main">
        <banner></banner>
        <recommend-playlist></recommend-playlist>
        <recommend-music></recommend-music>
        <recommend-singer></recommend-singer>
    </div>
</template>

<script>
import banner from '@/components/home/banner/index.vue';
import recommendPlaylist from '@/components/home/recommend-playlist/index.vue';
import recommendMusic from '@/components/home/recommend-music/index.vue';
import recommendSinger from '@/components/home/recommend-singer/index.vue';
export default {
    components: {
        banner,
        recommendPlaylist,
        recommendMusic,
        recommendSinger
    }
}
</script>

<style scoped>
.main{
    width: 1200px;
    margin: auto;
}
</style>