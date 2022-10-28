<template>
    <div class="notfound">
        <div>
            <h3> 4. 0. 4 </h3>
            <p> Something wrong while loading this page </p>
            <small> Vous alllez être redirigés dans 0{{ compt }} {{ expression }} </small>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
const route = useRouter()
let compt = ref(4)
let expression = ref('secondes')
onMounted(() => {
    setInterval(() => {
        compt.value--
        expression.value = check_plural(compt.value, 'seconde')
    }, 1000);
    setTimeout(() => {
        route.push('/')
    }, 3000);
})
</script>

<style scoped>
.notfound {
    display: flex;
    flex-direction: row;
    height: 100vh;
    text-align: center;
    place-items: center;
    justify-content: center;
}
h3 {
    font-size: 4em;
    margin: 40px 0px;
    font-weight: bolder;
}
p {
    font-size: 2em;
}
</style>