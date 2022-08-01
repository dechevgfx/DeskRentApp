<template>
    <div class="login container">
        <div class="login-container">
            <h1 class="heading">Log In</h1>
            <div class="error">
                ERRORS SHOWS HERE
            </div>

            <form>
                <span>Enter your email address</span>
                <input type="text" name="email" id="email"/>

                <span>Password</span>
                <input
                    class="input"
                    type="password"
                    name="password"
                    id="password"
                />

                <button class="btn">Login</button>
                <br />
                <button class="btn">
                    <nuxt-link :to="`/register`">Sign up now</nuxt-link>
                </button>
            </form>
        </div>
        <!-- Log In Image -->
        <div class="login-image">
            <img src="@/assets/img/login.jpg" alt="" />
        </div>
    </div>
</template>

<style scoped>
@import url(../../assets/style.css);
</style>
