<template>
    <div class="dashboard">
        <h2> Dashboard </h2>
        <div class="stat">
            <Card v-for="statistique in statistiques" :key="statistique.number" :title="statistique.title"
                :price="statistique.price" :col="statistique.color"></Card>
        </div>
        <h2> Dernières transactions </h2>

        <table>
            <thead>
                <tr>
                    <th> Projet </th>
                    <th> Description </th>
                    <th> Type </th>
                    <th> Date </th>
                    <th> Montant </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Projet"> Restaurant </td>
                    <td data-label="Description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </td>
                    <td data-label="Type"> Income </td>
                    <td data-label="Type"> 14/10/22 </td>
                    <td data-label="Montant">4000</td>
                </tr>
                <tr>
                    <td data-label="Projet"> Textile </td>
                    <td data-label="Description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </td>
                    <td data-label="Type"> Income </td>
                    <td data-label="Type"> 14/10/22 </td>
                    <td data-label="Montant">2000</td>
                </tr>
                <tr>
                    <td data-label="Projet"> Textile </td>
                    <td data-label="Description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </td>
                    <td data-label="Type"> Expenses </td>
                    <td data-label="Type"> 14/10/22 </td>
                    <td data-label="Montant">6000</td>
                </tr>
                <tr>
                    <td data-label="Projet"> Parfumerie </td>
                    <td data-label="Description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </td>
                    <td data-label="Type"> Income </td>
                    <td data-label="Type"> 14/10/22 </td>
                    <td data-label="Montant">200</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Card from "@/components/Dashboard/Card.vue";
const statistiques = ref([
    {
        number: 1,
        title: "My Pocket",
        price: 2000,
        color: "blue"
    },
    {
        number: 2,
        title: "Incomes",
        price: 128000,
        color: "green"
    },
    {
        number: 3,
        title: "Expenses",
        price: 126000,
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

body {
  margin: 1rem;
}

table {
  --accent-color: rgb(255, 59, 59);
  --text-color: slategray;
  --bgColorDarker: #ececec;
  --bgColorLighter: #fcfcfc;
  --insideBorderColor: lightgray;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid var(--accent-color);
  border-collapse: collapse;
  color: var(--text-color);
  table-layout: fixed;
}

table thead tr {
  color: whitesmoke;
  background-color: var(--accent-color);
  font-weight: bold;
}

table tbody tr {
  border: 1px solid var(--insideBorderColor);
  background-color: var(--bgColorDarker);
}

table tbody tr:nth-child(odd) {
  background-color: var(--bgColorLighter);
}

table th {
  letter-spacing: 0.075rem;
}

table th,
table td {
  padding: 0.75rem 1rem;
  text-align: left;
}

table th:nth-child(4),
table td:nth-child(4) {
  text-align: right;
}

@media screen and (max-width: 768px) {
  table {
    border: none;
  }

  table caption {
    padding: 0.75rem 1rem;
    border-radius: 6px 6px 0 0;
    color: whitesmoke;
    font-size: 1.35rem;
    background-color: var(--accent-color);
  }

  table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  table tbody tr {
    margin-bottom: 2rem;
    display: block;
  }

  table td {
    font-size: 0.875rem;
    text-align: right;
    display: block;
  }

  table td:before {
    content: attr(data-label);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    float: left;
    opacity: 0.5;
  }

  table td:not(:last-child) {
    border-bottom: 1px solid var(--insideBorderColor);
  }
}
</style>