<template>
    <div class="login container">
        <div class="login-container">
            <h2>Welcome , Let's get started</h2>
            <p>Already have account <nuxt-link class="container-line" :to="`/login`">Log In</nuxt-link></p>

            <form>
                <span>Enter Your Email</span>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="yourmail@gmail.com"
                    v-model="email"
                />

                <span for="fullName">Full Name</span>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    v-model="fullName"

                />

                <span>Enter Your Password</span>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    v-model="password"

                />
                <button
                    @click="handleRegister"
                    class="btn"
                >
                    Register
                </button>
            </form>
        </div>
        <!-- Log In Image -->
        <div class="login-image">
            <img src="@/assets/img/sign-up.jpeg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName: '',
            email: '',
            password: '',
        };
    },
    methods: {
        handleRegister(e) {
            e.preventDefault();
            this.$store.commit("register", [
                fullName.value,
                email.value,
                password.value,
            ]);
            this.$router.push("/rooms");
        },
    },
    computed: {
        error() {
            return this.$store.state.error;
        },
    },
};
</script>

<style scoped>
@import url(../../assets/style.css);
</style>
