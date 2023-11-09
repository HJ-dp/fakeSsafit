<template>
    <div>
        <h1>최근 가장 많이 본 영상</h1>
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
fetch('https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-video/count')
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

h1 {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
}


.container {
    border-radius: 1em;
    box-shadow: 5px 5px 20px;
    padding: 20px 50px;
    margin: 2em;
    width: 90vw;
}

.List {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex-wrap: wrap;
}

card {
    display: flex;
    flex-direction: column;
    width: 346px;
    border: double 3px gray;
    padding: 10px;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: 0.2s;
}

card:hover {
    box-shadow: 2px 2px 2px gold;
    cursor: pointer;
    transform: scale(1.1);
}
</style>