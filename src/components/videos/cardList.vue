<template>
    <div>
        <h1 v-if="type == 'most'">최근 가장 많이 본 영상</h1>
        <h1 v-if="type == 'part'">부위별 운동영상</h1>
        <div v-if="type == 'part'" class="part">
            <a class="flex" @click="Click('전신')">
                <div class="partImg"></div>
                <p class="partInfo">전신</p>
            </a>
            <a class="flex" @click="Click('상체')">
                <div class="partImg"></div>
                <div class="partInfo">상체</div>
            </a>
            <a class="flex" @click="Click('하체')">
                <div class="partImg"></div>
                <div class="partInfo">하체</div>
            </a>
            <a class="flex" @click="Click('복부')">
                <div class="partImg"></div>
                <div class="partInfo">복부</div>
            </a>
        </div>
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
// import { useVideoStore } from '../../stores/video';
import { onMounted } from 'vue';
// const store = useVideoStore();
const content = ref('');
const isOk = ref(false);

const props = defineProps(["type", "myStore"])
onMounted(async () => {
    // await props.myStore.getVideoList();
    // if (props.type == 'most') {
    //     videoLoad();
    // }
    // else {
    //     await props.myStore.getPartVideo('전신');
    //     partVideo('전신');
    // }
    // isOk.value = true;
    fetchData();
})

const fetchData = async () => {
    isOk.value = false;
    if (props.type == 'most') {
        await videoLoad();
    }
    else {
        // await props.myStore.getPartVideo('전신');
        await partVideo('전신');
    }
    isOk.value = true;
}

async function videoLoad() {
    // fetch('https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-video/count')
    //     .then((response) => { return response.json() })
    //     .then((response) => {
    //         content.value = response;
    //         isOk.value = true;
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
    await props.myStore.getVideoList();
    content.value = props.myStore.VideoList;
    isOk.value = true;
    console.log('ㄹㅇ');
}

async function partVideo(p) {
    // fetch(`https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-video/part?part=${p}`)
    //     .then((response) => { return response.json() })
    //     .then((response) => {
    //         content.value = response;
    //         isOk.value = true;
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
    await props.myStore.getPartVideo(p);
    content.value = props.myStore.seletedVideo;
    isOk.value = true;
    console.log('왜안돼');
}



const Click = async (p) => {
    isOk.value = false;
    await partVideo(p);
}
</script>

<style scoped>
* {
    margin: 0;
}

code {
    background-color: #202129;
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 350px;
}

h1 {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    font-size: 24px;
}

a {
    text-decoration: none;
    color: black;
    width: 10%;
    cursor: pointer;
}


.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
}

.flex:hover {
    transform: scale(1.1);
}

.part {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;
}

.partImg {
    height: 4em;
    width: 4em;
    border-radius: 100px;
    background-color: rgb(52, 199, 89);
}

.partInfo {
    font-size: 17px;
}

.part :first-child :first-child {
    background-image: url('/d.jpg');
    background-position: 11% 0%;
    background-size: 15em;
}

.part :nth-child(2) :first-child {
    background-image: url('/d.jpg');
    background-position: 17% 60%;
    background-size: 11em;
}

.part :nth-child(3) :first-child {
    background-image: url('/d.jpg');
    background-position: 95% 80%;
    background-size: 10em;
}

.part :nth-child(4) :first-child {
    background-image: url('/d.jpg');
    background-size: 14em;
    background-position: 90% 0%;
}

.container {
    border-radius: 5px;
    border: 1px solid #eee;
    padding: 20px 50px;
    margin: 2em;
    width: 90vw;
    margin: 0 auto;
}


.List {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
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
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

card:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}
</style>