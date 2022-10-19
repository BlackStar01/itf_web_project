<template>
    <div id="home">
        <nav>
            <div class="nav">
                <router-link to="/"> Dashboard </router-link>
                <router-link to="/"> New expense </router-link>
                <router-link to="/"> List expense </router-link>
                <router-link to="/"> Dashboard </router-link>
            </div>
        </nav>  
        <main>
            <h1>ksrhjg</h1>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

</script>

<style scoped>
#home {
    background-color: rgb(243, 243, 243);
    position: relative;
    min-height: fit-content;
}
nav {
    background-color: goldenrod;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 80%;
    text-align: center;
}
nav a {
    display: block;
    text-decoration: none;
    color: black;
    margin: 15px 0px;
    padding: 10px 0px;
}
main {
    position: absolute;
    left: 20%;
    width: 80%;
}
</style>

    