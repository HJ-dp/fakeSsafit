<template>
    <div>
        <h1>부위별 운동영상</h1>
        <div class="container">
            <div v-if="isOk" class="List">
                <cardDetail v-for="i of content" :dynamic-props='i' :video-url="i.url" :key="i.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import cardDetail from './cardDetail.vue'
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
    margin: 2em;
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