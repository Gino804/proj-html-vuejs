<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import GoUp from './components/GoUp.vue';

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        GoUp
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
    <GoUp />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
