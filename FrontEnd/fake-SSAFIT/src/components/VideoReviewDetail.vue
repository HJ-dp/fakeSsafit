<template>
    <div>
        <!-- {{ dynamicProps.userId }} -->
        {{ dynamicProps.boardTitle }}
        {{ dynamicProps.writer }}
        <!-- {{ dynamicProps.content }} -->
        {{ dynamicProps.rating }}
        {{ dynamicProps.boardDate }}
        {{ dynamicProps.boardViewCnt }}
        
    </div>
</template>

<script setup>

defineProps({
    dynamicProps : Object,
})
</script>

<style scoped>

</style>