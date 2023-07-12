<script>

export default {
    props: {
        movie: Array
    }
}
</script>

<template>
    <div class="card">
        <div>
            <img :src="movie.poster" :alt="movie.title">
        </div>
        <div>
            <a href="#">{{ movie.title }}</a>
            <p class="views">{{ movie.views }} Views</p>
            <p class="release"><span>{{ movie.release }}</span><span>{{ movie.length }}</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    line-height: 27px;
    margin-top: 20px;

    img {
        height: 120px;
        width: 120px;
        margin-right: 15px;
    }

    a {
        font-size: 20px;
        font-weight: bold;
    }

    .views {
        font-size: 14px;
        font-weight: bold;
    }

    .release {
        display: flex;
        justify-content: space-between;
    }
}
</style>