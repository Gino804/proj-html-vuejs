<script>
export default {
    props: {
        placeholder: String,
        buttonText: String
    }
}
</script>

<template>
    <div>
        <input type="text" :placeholder="placeholder">
        <button>{{ buttonText }}</button>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/vars" as *;

input {
    background-color: $darkblue;
    border: 1px solid $lightgrey;
    border-left: none;
    border-right: none;
}

button {
    background-color: $green;
    border: none;
}

input,
button {
    padding: 15px;
    color: white;
}
</style>