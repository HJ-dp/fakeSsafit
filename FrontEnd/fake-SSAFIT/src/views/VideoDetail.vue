<template>
    <div>
        <div v-html="getYoutubeUrl()"></div>
        {{ $route.params.id }}
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const isbnParam = route.params.id;
function getYoutubeUrl() {
    return `<iframe 
	width="560" height="315" 
	src="https://www.youtube.com/embed/${isbnParam}" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
}

</script>

<style scoped>

</style>