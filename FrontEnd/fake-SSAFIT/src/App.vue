<template>
    <div class="cont">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <theHeader/>
        <carousel/>
        <div class="cont p">
            <cardlist />
            <br>
            <partcardlist/>
        </div>
    </div>
</template>

<script setup>
import cardlist from '../src/views/components/cardList.vue';
import partcardlist from '../src/views/components/partCardList.vue';
import theHeader from './views/must/header.vue';
import carousel from './views/must/carousel.vue';
</script>

<style scoped>
    .cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .p {
        margin-top: 1em;
    }
</style>