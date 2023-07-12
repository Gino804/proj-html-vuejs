<script>
import MainSlider from './MainSlider.vue';
import MainCarousel from './MainCarousel.vue';
import MainPlaylist from './MainPlaylist.vue';
import MainComingsoon from './MainComingsoon.vue';
import MoviesList from './MoviesList.vue'

export default {
    components: {
        MainSlider,
        MainCarousel,
        MainPlaylist,
        MainComingsoon,
        MoviesList
    }
}
</script>

<template>
    <MainSlider />
    <MainCarousel />
    <MainPlaylist />
    <MainComingsoon />
    <MoviesList />
</template>

<style lang="scss" scoped></style>