<template>
    <div>
        <div v-if="action === 'login'">
            <Register></Register>
        </div>
        <div v-else>
            <Login></Login>
        </div>
    </div>
</template>

<script setup>
import Register from '../components/Authentification/Register.vue'
import Login from '../components/Authentification/Login.vue'
import { ref, onMounted } from 'vue';

const action = ref('login')

</script>

    