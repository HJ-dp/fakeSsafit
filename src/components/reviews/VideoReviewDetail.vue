<template>
    <tr @click ="viewDetail()">
        <td>{{ dynamicProps.boardTitle }}</td>
        <td>{{ dynamicProps.writer }}</td>
        <td>{{ dynamicProps.rating }}</td>
        <td>{{ dynamicProps.boardDate }}</td>
        <td>{{ dynamicProps.boardViewCnt }}</td>
    </tr>
</template>

<script setup>

defineProps({
    dynamicProps : Object,
})

const emit = defineEmits(['onClick']);

function viewDetail() {
    console.log(e);
    emit('onClick',e);
}

</script>

<style scoped>

</style>