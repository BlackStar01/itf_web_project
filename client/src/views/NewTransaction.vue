<template>
    <div class="transactions">
        <h2> New transaction </h2>
        <form action="">
            <label> Select a project </label>
            <select name="" v-model="newProject.selectedProject">
                <option disabled default value=""> Select the project </option>
                <option :value="project.nameProject" v-for="project in projects" :key="project.nameProject"> {{
                        project.nameProject
                }} </option>
            </select>
            <div class="formgroup">
                <label> Select a service </label>
                <select name="" v-model="newProject.selectedService">
                    <option disabled default value=""> Select the project </option>
                    <option :value="project.nameProject" v-for="project in projects" :key="project.nameProject"> {{
                            project.nameProject
                    }} </option>
                </select>
            </div>

            <div class="formgroup">
                <label> Type of transaction </label>
                <select name="" v-model="newProject.typeTransaction">
                    <option disabled default value=""> Type of transaction </option>
                    <option :value="project.nameProject" v-for="project in projects" :key="project.nameProject"> {{
                            project.nameProject
                    }} </option>
                </select>
            </div>
            <div class="formgroup">
                <label> Amount of transaction </label>
                <input type="text" v-model="newProject.amountTransaction">
            </div>
            <br>
            <formbutton :type="'submit'"> Register </formbutton>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import formbutton from '@/components/Form/formbtn.vue'

const newProject = ref({
    selectedProject: "",
    selectedService: "",
    typeTransaction: "",
    titleTransaction: "",
    amountTransaction: 0,
})

const projects = ref([
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
input, select {
    background-color: #ccc;
    padding: 0px 20px;
    border: 0px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    height: 50px;
}
</style>