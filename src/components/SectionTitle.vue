<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

div {
    border-bottom: 1px solid $grey;
    border-left: 2px solid $green;
    margin: 50px 0;
    padding-left: 10px;
    padding-bottom: 10px;

    h3 {
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
    }
}
</style>