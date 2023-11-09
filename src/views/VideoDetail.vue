<template>
    <div class="videoList-container">
        <div v-html="getYoutubeUrl()"></div>
        <div class="videoList">
            <table>
                <thead>
                    <th v-for="i in header" :key="i"> {{ i }}</th>
                </thead>
                <tbody>
                    <detail class="videoList-item"  @on-click="gotClick(i.userId)" v-for="i in reviewList" :dynamic-props="i" :key="i"></detail>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from 'vue';
import detail from '../components/reviews/VideoReviewDetail.vue';

const route = useRoute();
const header = ["TITLE","Writer","rating","date","view"] ;
const idParam = route.params.id;

const reviewList = ref([]);

function getYoutubeUrl() {
    return `<iframe 
	width="860" height="515" 
	src="https://www.youtube.com/embed/${idParam}" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
}

function gotClick(e) {
    console.log(e);
}

const option = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}
let params = {
    videoId: idParam,
};
let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
let url = 'https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-/board/?' + query;

fetch(url, option)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        reviewList.value = response;
    })
    .catch(error => {
        console.log(error);
    });

</script>

<style scoped>
.videoList-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    gap: 1em;
}

.videoList {
    display: flex;
    flex-direction: column;
    width: 80vw;
    background-color: #f7f7f7;
    padding: 1em;
}

.videoList-item {
    margin: 1em;
    cursor: pointer;
    transition: 0.2s;
}

.videoList-item:hover{
    background-color: gold;
    color: white;
}
</style>