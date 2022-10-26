<template>
    <div id="microservice">

        <nav>
            <div class="user">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                        fill="currentColor" />
                    <path
                        d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                        fill="currentColor" />
                </svg>
                <h3> Name of user </h3>
            </div>
            <div class="nav">
                <router-link to="/home" @click="currentComponent = Dashboard"> Dashboard </router-link>
                <router-link to="/home" @click="currentComponent = Services"> My services </router-link>
                <router-link to="/home" @click="currentComponent = NewService"> New service </router-link>
                <router-link to="/home" @click="currentComponent = Services"> New transaction </router-link>
                <router-link to="/"> Logout </router-link>
            </div>
        </nav>
        <main>
            <h2> MicroService {{ $route.params.id }}</h2>
        </main>
    </div>
    <div>

    </div>
</template>

<script setup>

</script>


<style scoped>
#microservice {
    background-color: rgb(243, 243, 243);
    position: relative;
    min-height: fit-content;
}

nav {
    background-color: white;
    box-shadow: 1px 2px 5px #ccc;
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

nav .user {
    padding: 50px 0px;
}
.user svg {
    border: 1px solid #ccc;
    border-radius: 50%;
}
main {
    position: absolute;
    left: 20%;
    width: 80%;
}
</style>

    