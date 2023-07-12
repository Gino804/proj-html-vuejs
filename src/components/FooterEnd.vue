<template>
    <section id="footer-end">
        <div class="container">
            <div>
                <a href="#">Tram And Conditions</a>
                <a href="#">Policy</a>
                <a href="#">About</a>
            </div>
            <div>
                <p>&copy; 2020 <span>@Themepul</span> All Rights Reserved.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#footer-end {
    padding: 25px 0;

    .container {
        display: flex;
        justify-content: space-between;

        a {
            margin-right: 30px;
        }

        p {
            font-size: 15px;

            span {
                color: $green;
            }
        }
    }
}
</style>