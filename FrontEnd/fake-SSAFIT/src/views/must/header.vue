<template>
    <header>
        <div class="flex">
            <a href="#" class="logo">SSAFIT</a>
            <button class="toggle" @click="a"><span class="material-symbols-outlined">
density_medium
</span></button>
        </div>
        <nav :class="{'active':act}">
            <a href="#">홈</a>
            <a href="#">헬스장찾기</a>
            <a href="#">마이페이지</a>
            <a href="#">로그아웃</a>
            <!-- 아이콘 버전-->
            <!-- <div><a href="#"><span class="material-symbols-outlined">
                        home
                    </span></a></div>
            <a href="#">헬스장찾기</a>
            <a href="#"><span class="material-symbols-outlined">
                    account_circle
                </span></a>
            <a href="#"><span class="material-symbols-outlined">
                    logout
                </span></a> -->
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const act = ref(false);
function a(){
    act.value = !act.value;
}

</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

button{
    border: 0;
  background-color: transparent;
}

* {
    font-family: 'Roboto Mono', monospace;
}

a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    white-space:nowrap;
    padding: 5px;
}

.logo {
    font-size: 40px;
}

header {
    height: 70px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding:0 2em;
    box-shadow: 5px 1px 5px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    text-align: center;
}

.toggle {
    display: none;
}


@media screen and (max-width: 768px) {
    header {
        flex-direction: column;
        height: auto;
    }

    .flex {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        flex-direction: column;
        width: 100%;
        display: none;
        padding-bottom: 1em;
    }

    nav a:hover {
        background-color: aqua;
        border-radius: 5px;
    }

    .toggle{
        display: block;
    }

    nav.active{
        display: flex;
    }
}
</style>