<template>
    <div class="transactions">
        <h2> NEW TRANSACTION </h2>
        <form action="" @submit.prevent="createService">
            <label> Select a project </label>
            <select name="" v-model="newService.selectedProject">
                <option disabled default value=""> Select the project </option>
                <option :value="service.nameProject" v-for="service in services" :key="service.nameProject"> {{
                        service.nameProject
                }} </option>
            </select>
            <div class="formgroup">
                <label> Select a categorie of service </label>
                <select name="" v-model="newService.categorieServices">
                    <option disabled default value=""> Select the project </option>
                    <option :value="service.nameProject" v-for="category in allCategories" :key="category"> {{
                            category
                    }} </option>
                </select>
            </div>

            <div class="formgroup">
                <label> Name of service transaction </label>
                <select name="" v-model="newService.nameService">
                    <option disabled default value=""> Type of transaction </option>
                    <option :value="service.nameProject" v-for="service in services" :key="service.nameProject"> {{
                            service.nameProject
                    }} </option>
                </select>
            </div>
            <br>
            <formbutton :type="'submit'"> Create service </formbutton>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import formbutton from '@/components/Form/formbtn.vue'

const allCategories = ref(null);

const newService = ref({
    selectedProject: "",
    categorieServices: allCategories,
    nameService: "",
    amountOfService: 0,
})

onMounted(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
            allCategories.value = json
        })
})



const createService = () => {
    console.log(JSON.stringify(allCategories.value))
}

const services = ref([
    {
        nameProject: "Centre commercial",
        services: [
            {
                nameService: "Fashion",
                budget: 4000
            }
        ]
    },
    {
        nameProject: "Boutique Montparnasse",
        services: [
            {
                nameService: "Fashion",
                budget: 4000
            }
        ]
    }
])
</script>

<style scoped>
.transactions {
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

form {
    padding: 40px 40px;
    border: 1px solid transparent;
    background-color: white;
    box-shadow: 2px 5px 10px #ccc;
}

.formgroup {
    display: block;
    margin: 40px 0px;
}

input,
select {
    background-color: #ccc;
    padding: 0px 20px;
    border: 0px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    height: 50px;
}
</style>