<template>
    <a class="modal">
        <div class="dialog">
            <h1>SIGN UP</h1>
            <div class="flex-box">
                <div class="flex">
                    <label for="modalId">ID</label>
                    <input type="text" v-model="modalId" id="modalId">
                </div>
                <div class="flex">
                    <label for="modalPw">PW</label>
                    <input type="password" v-model="modalPw" id="modalPw">
                </div>
                <div class="flex">
                    <label for="userName">NAME</label>
                    <input type="text" v-model="userName" id="userName">
                </div>
                <div class="flex">
                    <label for="age">AGE</label>
                    <input type="text" v-model="age" id="age">
                </div>
                <div class="flex">
                    <label for="email">EMAIL</label>
                    <input type="text" v-model="email" id="email">
                </div>
            </div>
            <div>
                <button @click="signup">👌</button>
            </div>
        </div>
    </a>
</template>

<script setup>
import { ref } from 'vue';

const modalId = ref('');
const modalPw = ref('');
const userName = ref('');
const age = ref('');
const email = ref('');

const signup = () => {
    // const data = { age: 3, email: 'bonkri9', password: modalPw.value, userId: modalId.value, userName: '구본민' }
    // modalPw.value = '';
    // modalId.value = '';
    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: JSON.stringify(data),
    }
    let params = {
        userId: modalId.value, password: modalPw.value, userName: userName.value, age: age.value, email: email.value,
    };
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
    let url = 'https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-user/signup?' + query;

    fetch(url, option)
        .then(response => response)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex-box{
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    align-items: end;
}

.flex {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
}

.dialog {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 2em;
    border-radius: 2.5em;
    width: 30vw;
    gap: 1em;
    align-items: center;
    flex-basis: 350px;
}

button {
    border: none;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.3);
    border-radius: 1em;
    padding: 0.5em;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;
}

button:hover {
    background-color: gold;
    transition: 0.2s;
    color: white;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
}

input {
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 1em;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
}
</style>
