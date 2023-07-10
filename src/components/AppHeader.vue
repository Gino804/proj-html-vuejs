<script>
import HeaderSocials from './HeaderSocials.vue';
import BaseSearch from './BaseSearch.vue';

export default {
    components: {
        HeaderSocials,
        BaseSearch
    }
}
</script>

<template>
    <header>
        <HeaderSocials />
        <div class="separator"></div>
        <div class="container">
            <img src="../assets/img/cropped-logo.png">
            <BaseSearch :placeholder="'Search ...'" :buttonText="'Search'" />
        </div>
        <div class="separator"></div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

header {
    color: white;
    margin-top: 25px;

    .separator {
        height: 1px;
        background-color: $lightgrey;
        margin: 25px 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>