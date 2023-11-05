<template>
    <card>
        <div style="width=300px; height: 200px; background-color: gray;">
        </div>
        <div class="flex">
            <div class="title">{{ dynamicProps.title }}</div>
            <div class="flex right">
                <span class="material-symbols-outlined">
                    visibility
                </span>
                <div> 1 </div>

            </div>
        </div>
        <div class="flex">
            <div class="badge">{{ dynamicProps.part }}</div>
            <div>{{ dynamicProps.channelName }}</div>
        </div>
    </card>
</template>

<script setup>

defineProps({
    dynamicProps: Object,
    videoUrl: String
})


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
    gap:1em;
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