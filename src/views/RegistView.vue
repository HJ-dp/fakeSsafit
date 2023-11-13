<template>
    <div class="regist-container">
        <Login v-if="type=='login'"/>
        <Signup v-else/>
    </div>
</template>

<script setup>
import Login from '../components/user/LoginForm.vue'
import Signup from '../components/user/SignupForm.vue'

const props = defineProps(["type"]);

</script>

<style scoped>
.regist-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(90vh - 44px);
}
</style>