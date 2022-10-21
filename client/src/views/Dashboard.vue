<template>
    <div class="dashboard">
        <h2> Dashboard </h2>
        <div class="stat">
            <Card v-for="statistique in statistiques" :key="statistique.number" :title="statistique.title"
                :price="statistique.price" :col="statistique.color"></Card>
        </div>
        <h2> Dernières transactions </h2>

        <p>zr</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Card from "@/components/Dashboard/Card.vue";
const statistiques = ref([
    {
        number: 1,
        title: "My Pocket",
        price: 40523,
        color: "blue"
    },
    {
        number: 2,
        title: "Incomes",
        price: 95602,
        color: "green"
    },
    {
        number: 3,
        title: "Expenses",
        price: 36555,
        color: "red"
    },
])

</script>

<style scoped>
.dashboard {
    margin: 40px;
}
h2 {
    margin: 40px 0px;
}
.stat {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>