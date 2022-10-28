<template>
    <div class="card">
        <div class="left">
            <h4> {{title}} </h4>
            <p class="price"> {{price}} € </p>
        </div>
        <div class="right">
            <div class="icon">
                icon {{col}}
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { /* For color */
        type: String,
        required: true
    },
    price: { /* For color */
        type: Number,
        required: true
    },
    col: { /* For color */
        type: String,
        required: true
    }
})
</script>

<style scoped>
.card {
    display: grid;
    grid-template-columns: 70% 30%;
    border: 1px solid transparent;
    background-color: white;
    padding: 20px 30px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 1px 2px 5px #ccc;
    border-left: 5px solid v-bind(col);
}

.price {
    font-size: 2.5em;
    margin: 20px 0px;
}
</style>