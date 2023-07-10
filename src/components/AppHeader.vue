<script>
import HeaderSocials from './HeaderSocials.vue';

export default {
    components: {
        HeaderSocials
    }
}
</script>

<template>
    <header>
        <HeaderSocials />
        <div class="separator"></div>
    </header>
</template>

<style lang="scss" scoped>
header {
    color: white;
    margin-top: 25px;

    .separator {
        height: 1px;
        background-color: #131B24;
        margin: 25px 0;
    }
}
</style>