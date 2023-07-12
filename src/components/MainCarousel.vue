<script>
import SectionTitle from './SectionTitle.vue';
import MovieCard from './MovieCard.vue';
import { store } from '../data/store';
export default {
    components: {
        SectionTitle,
        MovieCard
    },
    data() {
        return {
            store,
            prevMovie: store.movies[store.movies.length - 1],
            currentMovie: store.movies[0],
            nextMovie: store.movies[1]
        }
    },
    methods: {
        setPrevMovie() {
            this.nextMovie = this.currentMovie;
            this.currentMovie = this.prevMovie;
            if (this.prevMovie === store.movies[0]) this.prevMovie = store.movies[store.movies.length - 1];
            else {
                for (let i = 0; i < store.movies.length; i++) {
                    if (this.prevMovie === store.movies[i]) this.prevMovie = store.movies[i - 1];
                }
            }
        },
        setNextMovie() {
            this.prevMovie = this.currentMovie;
            this.currentMovie = this.nextMovie;
            if (this.nextMovie === store.movies[store.movies.length - 1]) this.nextMovie = store.movies[0];
            else {
                for (let i = 0; i < store.movies.length; i++) {
                    if (this.nextMovie === store.movies[i]) {
                        this.nextMovie = store.movies[i + 1];
                        i = store.movies.length;
                    }
                }
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="title">
            <SectionTitle :title="'New Movie'"
                :subtitle="'Lorem Ipsum is simply dummy text of the printing and typesettin'" />
            <div class="arrows">
                <button class="arrow" @click="setPrevMovie">
                    <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
                </button>
                <button class="arrow" @click="setNextMovie">
                    <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                </button>
            </div>
        </div>
        <div class="carousel">
            <div class='w-34'>
                <MovieCard :movie="prevMovie" class="unactive" :isRounded="true" :isUnactive="true" />
            </div>
            <div class='w-32'>
                <MovieCard :movie="currentMovie" class="active" :isRounded="true" />
            </div>
            <div class='w-34'>
                <MovieCard :movie="nextMovie" class="unactive" :isRounded="true" :isUnactive="true" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrows {
        align-self: flex-start;
        margin-top: 50px;

        .arrow {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid $grey;
            margin-left: 5px;
            color: $green;
            background-color: $darkblue;

            &:hover {
                color: white;
                background-color: $green;
            }
        }
    }
}

.carousel {
    display: flex;
    align-items: center;
    margin-top: 80px;

    .w-32 {
        width: 32%;
    }

    .w-34 {
        width: 34%;
    }

    .unactive {
        opacity: 0.4;
    }

    .active {
        height: 600px;
    }
}
</style>