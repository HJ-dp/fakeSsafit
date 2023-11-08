<template>
    <div class="videoList-container">
        <div v-html="getYoutubeUrl()"></div>
        <div class="videoList">
            <detail class="videoList-item" @click="gotClick()" v-for="i in reviewList" :dynamic-props="i" :key="i"></detail>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import {ref} from 'vue';
import detail from '../components/VideoReviewDetail.vue';

const route = useRoute();

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

function gotClick(){

}

const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }
    let params = {
        videoId : idParam,
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
    padding : 2em;
    gap : 1em;
}

.videoList {
    display: flex;
    flex-direction: column;
    width: 80vw;
    background-color: #f7f7f7;
    padding: 1em;
}


</style>