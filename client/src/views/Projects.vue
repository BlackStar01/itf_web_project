<template>
    <div class="services">
        <h2> MY PROJECTS </h2>
        <div @click="goToMicroService(service)" class="service" v-for="service in services" :key="service.id" :style="'background-color:' + service.color + ';'">
            <span> {{ service.name }} </span>
            <small> {{ service.price }} € </small>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()

const services = ref([
    {
        id: 1,
        name: " Project 1 ",
        price: 40523,
        color: "blue"
    },
    {
        id: 2,
        name: " Project 2 ",
        price: 40523,
        color: "pink"
    },
    {
        id: 3,
        name: " Project 3 ",
        price: 40523,
        color: "orange"
    },
])

const goToMicroService = (e) => {
    route.push('/home/' + e.id)
}
</script>

<style scoped>
.services {
    margin: 40px;
    cursor: pointer;
}
h2 {
    margin: 40px 0px;
}
.service {
    margin: 15px;
    padding: 20px;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 8px;
    box-shadow: 1px 2px 5px #ccc;
    position: relative;
}
span {
    font-weight: bolder;
}
small {
    position: absolute;
    right: 10%;
}
</style>