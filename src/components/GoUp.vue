<template>
    <a href="#">
        <FontAwesomeIcon :icon="['fas', 'chevron-up']" />
    </a>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

a {
    background-color: white;
    padding: 20px;
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right: 50px;
    color: $grey;

    &:hover {
        background-color: $grey;
        color: white;
    }
}
</style>