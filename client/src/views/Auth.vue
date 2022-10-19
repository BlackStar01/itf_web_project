<template>
    <div class="auth">
        <div v-if="action === 'register'">
            <form class="register" @submit.prevent="try_register">
                <div class="top">
                    <!--  <img src="@/assets/logo.png" alt="logo" /> -->
                    <h3> REGISTER </h3>
                </div>
                <forminput class="register_input" :svg_value="inputs.register.firstname.svg"
                    :placeholder="inputs.register.firstname.placeholder" :type="inputs.register.firstname.type">
                </forminput>
                <forminput class="register_input" :svg_value="inputs.register.lastname.svg"
                    :placeholder="inputs.register.lastname.placeholder" :type="inputs.register.lastname.type">
                </forminput>
                <forminput class="register_input" :svg_value="inputs.register.email.svg"
                    :placeholder="inputs.register.email.placeholder" :type="inputs.register.email.type">
                </forminput>
                <forminput class="register_input" :svg_value="inputs.register.password.svg"
                    :placeholder="inputs.register.password.placeholder" :type="inputs.register.password.type">
                </forminput>
                <forminput class="register_input" :svg_value="inputs.register.confirmPassword.svg"
                    :placeholder="inputs.register.confirmPassword.placeholder"
                    :type="inputs.register.confirmPassword.type">
                </forminput>
                <formbutton :type="'submit'"> Register </formbutton>
                <br><br>
                <small :onclick="() => action = ''"> Se connecter </small>
            </form>
        </div>
        <div v-else>
            <form class="login" @submit.prevent="try_login">
                <div class="top">
                    <!--  <img src="@/assets/logo.png" alt="logo" /> -->
                    <h3> LOGIN </h3>
                </div>
                <forminput class="login_input" :svg_value="inputs.login.email.svg"
                    :placeholder="inputs.login.email.placeholder" :type="inputs.login.email.type">
                </forminput>
                <forminput class="login_input" :svg_value="inputs.login.password.svg"
                    :placeholder="inputs.login.password.placeholder" :type="inputs.login.password.type">
                </forminput>
                <formbutton :type="'submit'"> Login </formbutton>
                <br><br>
                <small :onclick="() => action = 'register'"> Créer un compte </small>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import forminput from '@/components/Form/forminput.vue'
import formbutton from '@/components/Form/formbtn.vue'

const action = ref('')

const inputs = ref({
    login: {
        email: {
            type: 'email',
            placeholder: 'Mail address',
            svg: 'M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
        },
        password: {
            type: 'password',
            placeholder: 'Password',
            svg: 'M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z'
        }
    },
    register: {
        firstname: {
            type: 'text',
            placeholder: 'First name',
            svg: 'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
        },
        lastname: {
            type: 'text',
            placeholder: 'Last name',
            svg: 'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
        },
        email: {
            type: 'email',
            placeholder: 'Mail address',
            svg: 'M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z'
        },
        password: {
            type: 'password',
            placeholder: 'Password',
            svg: 'M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'
        },
        confirmPassword: {
            type: 'password',
            placeholder: 'Confirm password',
            svg: 'M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'
        }
    }
})

const try_login = async () => {
    let inputs = window.document.getElementsByClassName('login_input');
    const data_login = { email: inputs[0].childNodes[1].value, password: inputs[1].childNodes[1].value }

    console.log(data_login)
}

const try_register = async () => {
    let inputs = window.document.getElementsByClassName('register_input');
    const data_login = { firstname: inputs[0].childNodes[1].value, lastname: inputs[1].childNodes[1].value, email: inputs[2].childNodes[1].value, password: inputs[3].childNodes[1].value, confirmationPassword: inputs[4].childNodes[1].value }
    /* if (check_mail(data_login.email)) {
        const response = await fetch('http://localhost:3005/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data_login)
        })
        const is_user = response.status === 201 ? true : false
        if (is_user) {
            const res = await response.json()
            message.value = res.message
            notif.value = '#004b23',
                bgnotif.value = '#4FCE66'
            window.localStorage.setItem('token', res.token);
            loading.value = true
            action.value = ''
            setTimeout(() => {
                router.push('/')
            }, 2000);
        }
        else {
            message.value = "Failed"
            notif.value = '#dd0426'
            bgnotif.value = '#ff9696'
        }
    } */
    console.log(data_login)
}


</script>

<style scoped>
.auth {
    display: grid;
    min-height: 100vh;
    place-items: center;
}

.top {
    text-align: center;
    padding: 40px 0px;
}

.auth img {
    width: 60px;
    height: 60px;
}

small {
    cursor: pointer;
    color: rgb(68, 68, 68);
}

small:focus,
small:hover {
    color: var(--secondary);
    text-decoration: underline;
}
</style>
    