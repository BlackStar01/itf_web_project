<template>
    <div class="services">
        <h2> Dashboard </h2>
        <div class="service" v-for="service in services" :key="service.name">
            <span> {{ service.name }} </span>
            <small> {{ service.price }} </small>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        name: " Service 1 ",
        price: 40523,
        color: "blue"
    },
    {
        name: " Service 2 ",
        price: 40523,
        color: "blue"
    },
    {
        name: " Service 3 ",
        price: 40523,
        color: "blue"
    },
])
</script>

<style scoped>
.services {
    margin: 40px;
}
h2 {
    margin: 40px 0px;
}
</style>