<script>
import MainSlider from './MainSlider.vue';
import MainCarousel from './MainCarousel.vue';
import MainPlaylist from './MainPlaylist.vue';

export default {
    components: {
        MainSlider,
        MainCarousel,
        MainPlaylist
    }
}
</script>

<template>
    <MainSlider />
    <MainCarousel />
    <MainPlaylist />
</template>

<style lang="scss" scoped></style>