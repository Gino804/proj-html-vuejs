<script>
</script>

<template>
    <div class="container">
        <section id="form">
            <form>
                <div class="inputs">
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                    <input type="email" placeholder="Email">
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

#form {
    background-image: url('../assets/img/form-bg-1.png');
    height: 385px;
    margin: 100px 0;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;

        .inputs {
            display: flex;
            justify-content: space-between;
            width: 100%;

            input {
                color: white;
                font-size: 18px;
                background-color: $green;
                border: 1px solid white;
                padding: 20px;
                border-radius: 40px;
                width: 100%;
                margin-right: 30px;

                &::placeholder {
                    color: white;
                }

                &:focus {
                    border-color: rgb(189, 189, 189);
                    outline: none;
                }
            }
        }

        button {
            width: 200px;
            height: 60px;
            margin: 0 auto;
            margin-top: 50px;
            background-color: $darkblue;
            border: none;
            color: white;
            border-radius: 40px;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
}
</style>