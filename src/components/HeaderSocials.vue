<script>

</script>

<template>
    <section id="socials">
        <div class="container">
            <div>
                <FontAwesomeIcon :icon="['far', 'envelope']" class="envelope" />
                Superhit top movie <span>** King Star **</span>
                <span class="socials">
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
                    <a href="#" class="google">
                        <FontAwesomeIcon :icon="['fab', 'google-plus-g']" />
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

        a {
            margin: 0 7px;
            border-radius: 50%;
        }

        .facebook {
            color: #355089;
            padding: 7px 10px;

            &:hover {
                background-color: #355089;
                color: white;
            }
        }

        .twitter {
            color: #018BC2;
            padding: 7px;

            &:hover {
                background-color: #018BC2;
                color: white;
            }
        }

        .linkedin {
            color: #0C6794;
            padding: 6px 8px;

            &:hover {
                background-color: #0C6794;
                color: white;
            }
        }

        .instagram {
            color: #BB222B;
            padding: 6px 8px;

            &:hover {
                background-color: #BB222B;
                color: white;
            }
        }

        .google {
            color: #B03E32;
            padding: 7px 5px;

            &:hover {
                background-color: #B03E32;
                color: white;
            }
        }
    }

    .lock {
        margin-right: 5px;
    }
}
</style>