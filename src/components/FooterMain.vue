<script>
import { store } from '../data/store';

export default {
    data() {
        return {
            store,
            aboutUs: {
                title: 'About Us',
                text: 'Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus seds.'
            },
            movieCategory: {
                title: 'Movie Category',
                links: [
                    'English New Movie',
                    'Hindi All Movie',
                    'Latest Tamil Movie',
                    'New Top Rating Movie',
                    'Hornn New Movie',
                    'Animation New Movie'
                ]
            },
            information: {
                title: 'Information',
                links: [
                    'Youtube Video Post',
                    'Actor Information',
                    'New Promotion',
                    'Latest Movie In English',
                    'Latest Film Product',
                    'Video New Video'
                ]
            },
            recentPosts: {
                title: 'Recent Posts',
                elements: [
                    store.news[0],
                    store.news[1],
                    store.news[2]
                ]
            }
        }
    },
    methods: {
        shortTitle(title) {
            if (title.length > 40) return title.substring(0, 40);
            else return title;
        }
    }
}
</script>

<template>
    <section id="footer-main">
        <div class="layer"></div>
        <div class="container">
            <div class="about-us">
                <h3>{{ aboutUs.title }}</h3>
                <div class="title-line"></div>
                <p>{{ aboutUs.text }}</p>
                <a href="#" class="facebook">
                    <FontAwesomeIcon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="#" class="twitter">
                    <FontAwesomeIcon :icon="['fab', 'twitter']" />
                </a>
                <a href="#" class="linkedin">
                    <FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
                </a>
                <a href="#" class="instagram">
                    <FontAwesomeIcon :icon="['fab', 'instagram']" />
                </a>
                <a href="#" class="pinterest">
                    <FontAwesomeIcon :icon="['fab', 'pinterest']" />
                </a>
            </div>
            <div class="movie-category">
                <h3>{{ movieCategory.title }}</h3>
                <div class="title-line"></div>
                <ul>
                    <li v-for="link in movieCategory.links" :key="link"><a href='#'>{{ link }}</a></li>
                </ul>
            </div>
            <div class="information">
                <h3>{{ information.title }}</h3>
                <div class="title-line"></div>
                <ul>
                    <li v-for="link in information.links" :key="link"><a href='#'>{{ link }}</a></li>
                </ul>
            </div>
            <div class="recent-posts">
                <h3>{{ recentPosts.title }}</h3>
                <div class="title-line"></div>
                <div v-for="element in recentPosts.elements" :key="element.id" class="card">
                    <img :src="element.img" :alt="element.title">
                    <div class="description">
                        <h4>{{ shortTitle(element.title) }}</h4>
                        <p>{{ element.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#footer-main {
    padding: 80px 0;
    background-image: url('../assets/img/ft-bg.jpg');
    position: relative;

    .layer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #17212C;
        opacity: 0.9;
    }

    .container {
        display: flex;

        >div {
            flex-basis: 25%;
            z-index: 1;

            .title-line {
                width: 40px;
                height: 2px;
                background-color: white;
                margin-top: 3px;
            }

            &.about-us {
                padding-right: 30px;

                p {
                    margin-top: 40px;
                    margin-bottom: 30px;
                    line-height: 30px;
                    font-size: 15px;
                }

                a {
                    padding: 10px;
                    background-color: red;
                    border-radius: 50%;
                    margin-right: 10px;

                    &:hover {
                        background-color: transparent;
                    }

                    &.facebook {
                        padding: 10px 13px;
                        background-color: #02B0E8;
                    }

                    &.twitter {
                        background-color: #02B0E8;
                    }

                    &.linkedin {
                        padding: 10px 11px;
                        background-color: #00A098;
                    }

                    &.instagram {
                        padding: 10px 11px;
                        background-color: #C22E2A;
                    }

                    &.pinterest {
                        background-color: #A80B1C;
                    }
                }
            }

            &.movie-category,
            &.information {
                li {
                    margin-top: 30px;
                }
            }

            &.recent-posts {
                .card {
                    display: flex;
                    margin-top: 30px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    .description {
                        line-height: 33px;
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}
</style>