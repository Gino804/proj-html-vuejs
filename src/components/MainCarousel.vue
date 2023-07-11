<script>
import SectionTitle from './SectionTitle.vue';
export default {
    components: {
        SectionTitle
    }
}
</script>

<template>
    <div class="container">
        <SectionTitle :title="'New Movie'" :subtitle="'Lorem Ipsum is simply dummy text of the printing and typesettin'" />
    </div>
</template>

<style scoped></style>