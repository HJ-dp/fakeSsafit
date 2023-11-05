<template>
    <div class="cont">
        <theHeader/>
        <div class="cont">
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
</script>

<style scoped>
    * {
        margin: 0;
    }

    .cont {
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        align-items: center;
    }
</style>