<script>
import SectionTitle from './SectionTitle.vue';
import PlaylistCard from './PlaylistCard.vue';
import { store } from '../data/store';

export default {
    components: {
        SectionTitle,
        PlaylistCard
    },
    data() {
        return {
            store,
            playlistMovies: store.movies.slice(0, 10)
        }
    },
}
</script>

<template>
    <section id="playlist">
        <div class="container">
            <SectionTitle :title="'Movie Playlist'"
                :subtitle="'Lorem Ipsum is simply dummy text of the printing and typesettin'" />
            <div class="video">
                <div class="video-container">
                    <iframe width="737" height="560" src="https://www.youtube.com/embed/BP0k4SdquG0"
                        title="Yeh Saali Aashiqui | Official Trailer | Vardhan Puri, Shivaleeka Oberoi | Cherag Ruparel | 29 Nov"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="playlist-container">
                    <div class="playlist-title">
                        <h4>New Movie</h4>
                        <p>Plying 24</p>
                    </div>
                    <div class="playlist-body">
                        <PlaylistCard v-for="movie in playlistMovies" :key="movie.id" :movie="movie" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
        

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#playlist {
    margin-top: 100px;
    margin-bottom: 120px;

    .video {
        display: flex;
        height: 560px;

        .video-container {
            flex-basis: 65%;
            height: 100%;

            iframe {
                width: 100%;
            }
        }

        .playlist-container {
            background-color: $grey;
            flex-basis: 35%;
            height: 100%;
            margin-left: 30px;

            .playlist-title {
                padding: 20px;
                line-height: 25px;
                height: 15%;
                border-bottom: 2px solid $darkblue;

                h4 {
                    font-size: 18px;
                }

                p {
                    font-size: 14px;
                }
            }

            .playlist-body {
                height: 85%;
                overflow: auto;
                padding: 20px 15px 40px 20px;
            }
        }
    }
}
</style>