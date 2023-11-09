<template>
    <div class="item-box">
        <div class="item"><a href="" class="links">홈</a></div>
        <div class="item"><a href="" class="links">헬스장</a></div>
        <div class="item"><a href="" class="links">로그인</a></div>
        <div class="item"><a href="" class="links">로그아웃</a></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.item-box{
    display: flex;
    width: 100%;
    position:sticky;
    bottom:0;
}
.item {
    width:25%;
    background-color: beige;
    text-align: center;
}

.item:hover {
    background-color: gold;
    transition: 0.3s;
    width:35%;
    color:white;
}

.links {
    text-decoration: none;
    color:inherit;
    display: block;
    cursor: pointer;
    padding: 1em;
}
</style>