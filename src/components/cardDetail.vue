<template>
    <card @click="detailView(dynamicProps.videoId)">
        <!-- <div style="width=400px; height: 180px; background-color: gray;"> -->
        <img :src="getImageUrl(dynamicProps.videoId)" />
        <!-- </div> -->
        <div class="flex">
            <div class="title">{{ dynamicProps.title }}</div>
            <div class="flex right">
                <span class="material-symbols-outlined">
                    visibility
                </span>
                <div> {{ dynamicProps.videoViewCnt }} </div>
            </div>
        </div>
        <div class="flex">
            <div class="badge">{{ dynamicProps.part }}</div>
            <div>{{ dynamicProps.channelName }}</div>
        </div>
    </card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const detailView = (path) => {
  router.push('/detail/'+ path)         // router.push("/") : 경로만 전달 가능
  // router.push({ name:path }) : name 기반일 경우
}

defineProps({
    dynamicProps: Object,
    videoUrl: String
})

const fname = ref("Vue");

function getImageUrl(name) {
    return `https://img.youtube.com/vi/${name}/mqdefault.jpg`;
}

</script>

<style scoped>
.title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.right {
    margin-right: 1em;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}


.badge {
    background-color: #A2B59F;
    color: white;
    width: 35px;
    border: solid 1px white;
    border-radius: 10px;
    text-align: center;
    padding: 3px;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}
</style>