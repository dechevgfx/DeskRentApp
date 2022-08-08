<template>
    <div class="login container">
        <div class="login-container">
            <h1 class="heading">Log In</h1>
            <p>
                Don't have an account?
                <nuxt-link class="container-line" :to="`/register`"
                    ><strong>Sign Up Now</strong></nuxt-link
                >
            </p>
            <div class="error" v-if="error">
                {{ error }}
            </div>

            <form>
                <span>Enter your email address</span>
                <input type="text" name="email" id="email" v-model="email" />

                <span>Password</span>
                <input
                    class="input"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                />

                <button @click="handleLogin" class="btn">Login</button>
                <br />
            </form>
        </div>
        <div class="login-image">
            <img src="@/assets/img/login.jpg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleLogin(e) {
            e.preventDefault();
            this.$store.commit("login", [email.value, password.value]);

            if (this.$store.state.currentUser) {
                //Open home because its an existing customer (greet the customer)
                this.$router.push("home");
            }
        },
    },
    computed: {
        error() {
            return this.$store.state.error;
        },
        currentUser() {
            return this.$store.state.user;
        },
    },
    middleware: ["noAuthentication"],
};
</script>
