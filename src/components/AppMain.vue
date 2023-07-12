<script>
import MainSlider from './MainSlider.vue';
import MainCarousel from './MainCarousel.vue';
import MainPlaylist from './MainPlaylist.vue';
import MainComingsoon from './MainComingsoon.vue';
import MoviesList from './MoviesList.vue';
import MainNews from './MainNews.vue';
import MainForm from './MainForm.vue';

export default {
    components: {
        MainSlider,
        MainCarousel,
        MainPlaylist,
        MainComingsoon,
        MoviesList,
        MainNews,
        MainForm
    }
}
</script>

<template>
    <MainSlider />
    <MainCarousel />
    <MainPlaylist />
    <MainComingsoon />
    <MoviesList />
    <MainNews />
    <MainForm />
</template>

<style lang="scss" scoped></style>