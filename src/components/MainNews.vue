<script>
import SectionTitle from './SectionTitle.vue';
import NewsCard from './NewsCard.vue';
import { store } from '../data/store';

export default {
    components: {
        SectionTitle,
        NewsCard
    },
    data() {
        return { store }
    }
}
</script>

<template>
    <section id="news">
        <div class="container">
            <SectionTitle :title="'Latest News'"
                :subtitle="'Lorem Ipsum is simply dummy text of the printing and typesettin'" />
            <div class="news-body">
                <div class="main-news">
                    <NewsCard :news="store.news[0]" :isBig="true" />
                </div>
                <div class="secondary-news">
                    <ul>
                        <li v-for="news in store.news.slice(1, 5)" :key="news.id">
                            <NewsCard :news="news" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.news-body {
    display: flex;
    height: 600px;

    >div {
        height: 100%;
    }

    .main-news {
        width: 600px;
        margin-right: 20px;
    }

    .secondary-news {
        width: calc(100% - 600px);

        ul {
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;

            li {
                flex-basis: 50%;
                height: 50%;
                padding: 10px;
            }
        }
    }
}
</style>