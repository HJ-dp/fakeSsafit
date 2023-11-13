<template>
    <div>
        <carousel />
        <div class="cont p">
            <cardlist type="most" :myStore="store"/>
            <br>
            <cardlist type="part" :myStore="store"/>
            <!-- <partcardlist /> -->
        </div>
    </div>
</template>

<script setup>
import carousel from '../components/must/carousel.vue';
import cardlist from '../components/videos/cardList.vue';
import { useVideoStore } from '../stores/video';
import { onMounted } from 'vue';
const store = useVideoStore();
onMounted(()=>{
    store.getVideoList();
    store.getPartVideo('전신');
})
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