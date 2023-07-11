<template>
    <section id="slider">
        <div>
            <h4>Welcome To Our Movie Site</h4>
            <h2>OUR SPECIAL <span>MOVIES</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown</p>
            <a href="#">Read More</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#slider {
    background-image: url('../assets/img/slider.jpg');
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    div {
        text-align: center;
        width: 500px;
        line-height: 30px;
        margin-left: 300px;

        h2 {
            font-size: 40px;
            font-weight: normal;
            margin: 15px 0;

            span {
                color: $green;
            }
        }

        p {
            margin-bottom: 15px;
        }

        a {
            background-color: $green;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 15px;
            font-weight: bold;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
}
</style>