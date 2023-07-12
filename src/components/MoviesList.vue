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
            movies: store.movies.reverse().slice(0, 6)
        }
    }
}
</script>

<template>
    <section id="movies-list">
        <div class="container">
            <SectionTitle :title="'New Movie'"
                :subtitle="'Lorem Ipsum is simply dummy text of the printing and typesettin'" />
            <nav>
                <ul>
                    <li><a href='#' class="focused">All</a></li>
                    <li><a href='#'>Coming Soon</a></li>
                    <li><a href='#'>Latest Movie</a></li>
                    <li><a href='#'>Top Rating</a></li>
                    <li><a href='#'>TV Series</a></li>
                </ul>
            </nav>
            <ul class="row">
                <li v-for="movie in movies" :key="movie.id" class="col">
                    <MovieCard :movie="movie" class="h-550" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#movies-list {
    margin: 50px 0;

    nav ul {
        display: flex;

        li {
            margin-right: 30px;
        }

        .focused {
            color: $green;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;

        .col {
            flex-basis: calc(100% / 3);
            padding: 15px;

            .h-550 {
                height: 550px;
            }
        }
    }
}
</style>