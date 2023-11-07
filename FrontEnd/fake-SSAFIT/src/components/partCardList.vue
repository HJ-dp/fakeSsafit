<template>
    <div>
        <h1>부위별 운동영상</h1>
        <!-- <code>
        <div>
          <p class="typingEffect">
            부위별 운동영상
          </p>
        </div>
      </code> -->
        <br>
        <div class="part">
            <a class="flex" href="#">
                <div class="partImg"></div>
                <div>전신</div>
            </a>
            <a class="flex" href="#">
                <div class="partImg"></div>
                <div>상체</div>
            </a>
            <a class="flex" href="#">
                <div class="partImg"></div>
                <div>하체</div>
            </a>
            <a class="flex" href="#">
                <div class="partImg"></div>
                <div>복부</div>
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

.typingEffect {
    width: 0;
    overflow: hidden;
    /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white;
    /* The cursor*/
    font-size: 32px;
    white-space: nowrap;
    /* Keeps the text on a single line */
    animation: typing 2s steps(30)forwards;
}

/* The typing animation */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

h1 {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
}

a {
    text-decoration: none;
    color: black;
    width: 10%
}


.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
}

.flex:hover {
    box-shadow: 0 1em 0 0 gold;
}

.part {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 4em; */
}

.partImg {
    height: 4em;
    width: 4em;
    border-radius: 100px;
    background-color: aqua;
}

.container {
    border-radius: 1em;
    box-shadow: 5px 5px 20px;
    padding: 20px 50px;
    margin: 1em 0 1em 0;
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
    width: 300px;
    border: double 3px gray;
    padding: 10px;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 0;
}
</style>