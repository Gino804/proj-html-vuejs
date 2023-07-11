<script>
export default {
    props: {
        movie: Object,
        isRounded: Boolean,
        isUnactive: Boolean
    }
}
</script>

<template>
    <div class="card">
        <img :src="movie.poster" :alt="movie.title" :class="{ 'rounded': isRounded }">
        <div v-if="!isUnactive" class="layer" :class="{ 'rounded': isRounded }"></div>
        <div v-if="!isUnactive" class="duration">{{ movie.length }}</div>
        <div class="rating">
            <FontAwesomeIcon :icon="['fas', 'star']" class="star" />{{ movie.rating }}/10
        </div>
        <div v-if="!isUnactive" class="play">
            <FontAwesomeIcon :icon="['far', 'circle-play']" />
        </div>
        <div class="description">
            <h3>{{ movie.title }}</h3>
            <p><b>Category:</b> <span>{{ movie.category }}</span></p>
            <p v-if="!isUnactive" class="release">Release: {{ movie.release }}</p>
            <p v-if="!isUnactive" class="genres">Genres: {{ movie.genre1 }}, {{
                movie.genre2 }}</p>
        </div>
        <div class="details" :class="{ 'green-hover': !isUnactive }">Details</div>
        <div class="views" :class="{ 'green-hover': !isUnactive }">{{ movie.views }} Views</div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

.card {
    width: 34%;
    height: 500px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: fill;
    }

    .layer {
        display: none;
        background-color: $green;
        opacity: 0.1;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    &:hover {

        .layer,
        .duration,
        .play {
            display: block;
        }

        .description {

            .release,
            .genres {
                display: block;
            }
        }
    }

    .rounded {
        border-radius: 30px;
    }

    div {
        position: absolute;

        &.duration {
            display: none;
            top: 20px;
            background-color: $green;
            padding: 10px;
            font-size: 14px;
        }

        &.rating {
            top: 20px;
            right: 10px;
            font-size: 14px;

            .star {
                color: $green;
                margin-right: 5px;
            }
        }

        &.play {
            display: none;
            top: 250px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 50px;
            color: $green;
            cursor: pointer;
        }

        &.description {
            bottom: 100px;
            left: 15px;
            right: 15px;
            line-height: 30px;

            h3 {
                font-size: 24px;
            }

            span {
                font-size: 14px;
            }

            .release,
            .genres {
                display: none;
                font-size: 14px;
            }
        }

        &.details,
        &.views {
            bottom: 20px;
            background-color: $darkblue;
            padding: 12px;
            font-weight: bold;
            font-size: 15px;
            cursor: pointer;

            &:hover.green-hover {
                background-color: $green;
            }
        }

        &.details,
        &.duration {
            left: 0;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }

        &.views {
            right: 0;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
}
</style>