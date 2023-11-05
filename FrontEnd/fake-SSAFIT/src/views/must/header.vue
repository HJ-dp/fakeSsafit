<template>
    <header>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div class="logo">SSAFIT</div>
        <nav>
            <a href=""><span class="material-symbols-outlined">
                    home
                </span></a>
            <a href="">헬스장찾기</a>
            <a href=""><span class="material-symbols-outlined">
                    account_circle
                </span></a>
            <a href=""><span class="material-symbols-outlined">
                    logout
                </span></a>
        </nav>

    </header>
</template>

<script setup>

</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .logo {
        font-size: 40px;
    }

    header {
        height: 80px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 1em;
        box-shadow: 5px 5px 20px;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }
</style>