<template>
    <div>
        <carousel />
        <div class="cont p">
            <cardlist type="most" />
            <br>
            <partcardlist />
        </div>
    </div>
</template>

<script setup>
import carousel from '../views/must/carousel.vue';
import cardlist from '../components/cardList.vue';
import partcardlist from '../components/partCardList.vue';
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