<script>
import HeaderSocials from './HeaderSocials.vue';
import BaseSearch from './BaseSearch.vue';
import BaseNavigation from './BaseNavigation.vue';

export default {
    components: {
        HeaderSocials,
        BaseSearch,
        BaseNavigation
    },

    data() {
        return {
            links: [
                {
                    title: 'Home',
                    subtitles: ['Home', 'Home 2', 'Home 3', 'Home 4', 'Home 5', 'Home 6']
                },
                {
                    title: 'Celebrity',
                    subtitles: ['Celebrity', 'Celebrity Single']
                },
                {
                    title: 'Movie',
                    subtitles: ['Movie Post', 'Top Rate Movie', 'Movie Category', 'Single Movie']
                },
                {
                    title: 'Page',
                    subtitles: ['Pricing Table', 'Call To Action', 'My Account', 'Cart', 'Checkout', 'Wishlist']
                },
                {
                    title: 'Shop',
                    subtitles: ['Shop Sidebar', 'No Sidebar']
                },
                {
                    title: 'Blog',
                    subtitles: null
                },
                {
                    title: 'Contact Us',
                    subtitles: null
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <HeaderSocials />
        <div class="separator"></div>
        <section id="search">
            <div class="container">
                <img src="../assets/img/cropped-logo.png">
                <BaseSearch :placeholder="'Search ...'" :buttonText="'Search'" />
            </div>
        </section>
        <div class="separator"></div>
        <section id="navigation">
            <div class="container">
                <BaseNavigation :links="links" />
                <a href="#">
                    <FontAwesomeIcon :icon="['fas', 'shopping-basket']" />
                    <div class="notification">0</div>
                </a>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

header {
    color: white;
    margin-top: 25px;

    .separator {
        height: 1px;
        background-color: $lightgrey;
        margin: 25px 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #navigation {
        .container {
            display: flex;
            justify-content: space-between;
        }

        a {
            position: relative;

            &:hover .notification {
                color: white;
            }

            .notification {
                background-color: $green;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                position: absolute;
                top: -8px;
                right: -8px;
                text-align: center;
                font-size: 12px;
            }
        }
    }
}
</style>