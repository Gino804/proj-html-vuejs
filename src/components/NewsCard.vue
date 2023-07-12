<script>
export default {
    props: {
        news: Object,
        isBig: Boolean
    },
    computed: {
        shortTitle() {
            if (this.isBig) return this.news.title;
            else {
                if (this.news.title.length > 50) return this.news.title.substring(0, 50);
                else return this.news.title;
            }
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="news.img" :alt="news.title">
        <div class="layer"></div>
        <div class="date">{{ news.date }}</div>
        <div class="title" :class="{ 'big-title': isBig }">{{ shortTitle }}</div>
        <div class="details">Details</div>
        <div class="share"><span v-if="isBig">moviestar <b>0 comment</b></span>Share</div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

.card {
    position: relative;
    height: 100%;

    div {
        position: absolute;
    }

    img {
        height: 100%;
        width: 100%;
    }

    .layer {
        background-color: black;
        opacity: 0.3;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .date {
        display: none;
        background-color: $green;
        top: 30px;
        right: 0;
        padding: 10px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .title {
        bottom: 100px;
        left: 20px;
        font-weight: bold;
        font-size: 20px;
    }

    .big-title {
        font-size: 25px;
    }

    .details {
        bottom: 20px;
        left: 0;
        background-color: $darkblue;
        padding: 13px 18px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: $green;
        }
    }

    .share {
        bottom: 40px;
        right: 20px;
        cursor: pointer;

        b {
            margin: 0 7px;
        }
    }

    &:hover {
        .layer {
            background-color: $green;
            opacity: 0.2;
        }

        .date {
            display: block;
        }
    }
}
</style>