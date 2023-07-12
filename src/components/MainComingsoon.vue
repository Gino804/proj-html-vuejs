<template>
    <section id="coming-soon">
        <div class="layer"></div>
        <div class="text">
            <h3>COMING SOON MOVIE</h3>
            <h2>MAX STILL</h2>
            <div>
                <h3>JON PLAYER <span>&</span> EMILY ROSE</h3>
                <h4>THE COUNTDOWN IS FINISHED!</h4>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#coming-soon {
    height: 650px;
    background-image: url('../assets/img/coming-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .layer {
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .text {
        z-index: 1;
        margin-left: 300px;
        text-align: center;
        line-height: 40px;

        >h3 {
            color: $green;
        }

        h2 {
            font-size: 50px;
            font-weight: normal;
            margin: 17px 0;
        }

        div {
            background-color: #0b1a2b;
            padding: 10px 30px;

            span {
                color: $green;
            }

            h4 {
                font-size: 16px;
            }
        }
    }
}
</style>