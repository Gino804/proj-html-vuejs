<script>
export default {
    props: {
        links: Array
    }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="link in links">
                <a href='#'>
                    {{ link.title }}
                    <FontAwesomeIcon v-if="link.subtitles" :icon="['fas', 'caret-down']" class="caret" />
                </a>
                <div v-if="link.subtitles" class="subtitles">
                    <ul>
                        <li v-for="subtitle in link.subtitles"><a href='#'>{{ subtitle }}</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>
@use "../assets/scss/partials/vars" as *;

nav {
    font-weight: bold;

    >ul {
        display: flex;

        >li {
            padding-right: 30px;
            position: relative;

            .caret {
                margin-left: 3px;
            }

            .subtitles {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 1;
                width: max-content;
                padding: 40px 100px 0 15px;
                background-color: $darkblue;

                &:hover {
                    display: block;
                }

                li {
                    margin-bottom: 25px;
                }
            }

            &:hover .subtitles {
                display: block;
            }

            >a {
                font-size: 19px;
            }
        }
    }

}
</style>