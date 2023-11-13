<template>
    <div>
        <h1 v-if="type=='most'">최근 가장 많이 본 영상</h1>
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
const content = ref('');
const isOk = ref(false);

const props = defineProps(["type"])

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
    white-space: nowrap;
    font-size : 24px;
}


.container {
    border-radius: 5px;
    border : 1px solid #eee;
    padding: 20px 20px;
    margin: 2em auto;
    flex-shrink: 0;
    /* width: 90vw; */
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
    border: 0;
    padding: 10px;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: all .3s cubic-bezier(0,0,.5,1);
    box-shadow: 2px 4px 12px rgba(0,0,0,.08);
}

card:hover {
    box-shadow: 2px 4px 16px rgba(0,0,0,.16);
    cursor: pointer;
    transform: scale3d(1.01,1.01,1.01);
}
</style>