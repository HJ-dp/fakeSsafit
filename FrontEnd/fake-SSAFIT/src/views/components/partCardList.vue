<template>
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <h1>부위별 운동영상</h1>
        <div class="container">
            <div v-if="isOk" class="List">
                <card v-for="i of content" :dynamic-props='i' :video-url="i.url" :key="i.name" />
            </div>
        </div>
    </div>
</template>

<script setup>
import card from './cardDetail.vue'
import { ref } from 'vue';
const content = ref('')
const isOk = ref(false)
fetch('https://my-json-server.typicode.com/HJ-dp/Boxiting/post')
    .then((response) => { return response.json() })
    .then((response) => {
        content.value = response;
        isOk.value = true;
    })
    .catch((e) => {
        console.log(e);
    })
</script>

<style scoped>
* {
    margin: 0;
}
h1{
    font-family: 'Roboto Mono', monospace;
    text-align: center;
}

.container {
    box-shadow: 5px 5px 20px;
    padding: 20px 50px;
}

.List {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

card {
    display: flex;
    flex-direction: column;
    width: 300px;
    border: solid 1px black;
    padding: 10px;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 0;

}
</style>