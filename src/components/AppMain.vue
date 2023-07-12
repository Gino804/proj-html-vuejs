<script>
import MainSlider from './MainSlider.vue';
import MainCarousel from './MainCarousel.vue';
import MainPlaylist from './MainPlaylist.vue';
import MainComingsoon from './MainComingsoon.vue';

export default {
    components: {
        MainSlider,
        MainCarousel,
        MainPlaylist,
        MainComingsoon
    }
}
</script>

<template>
    <MainSlider />
    <MainCarousel />
    <MainPlaylist />
    <MainComingsoon />
</template>

<style lang="scss" scoped></style>