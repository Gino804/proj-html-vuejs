<script>

</script>

<template>
    <section id="socials">
        <div class="container">
            <div>
                <FontAwesomeIcon :icon="['far', 'envelope']" class="envelope" />
                Superhit top movie <span>** King Star **</span>
                <span class="socials">
                    <a href="#">
                        <FontAwesomeIcon :icon="['fab', 'facebook-f']" class="facebook" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon :icon="['fab', 'twitter']" class="twitter" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon :icon="['fab', 'linkedin-in']" class="linkedin" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon :icon="['fab', 'instagram']" class="instagram" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon :icon="['fab', 'google-plus-g']" class="google" />
                    </a>
                </span>
            </div>
            <div>
                <a href="#">
                    <FontAwesomeIcon :icon="['fas', 'lock']" class="lock" />Login
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

.container {
    display: flex;
    justify-content: space-between;

    .envelope {
        padding-right: 5px;
    }

    span {
        color: $green;
    }

    .socials {
        margin-left: 40px;
        padding: 10px;
        border-radius: 50%;

        a {
            margin: 0 7px;
        }

        .facebook {
            color: #355089;
        }

        .twitter {
            color: #018BC2;
        }

        .linkedin {
            color: #0C6794;
        }

        .instagram {
            color: #BB222B;
        }

        .google {
            color: #B03E32;
        }
    }

    .lock {
        margin-right: 5px;
    }
}
</style>