<template>
  <div class="login container">
    <div class="login-container">
      <h2>Welcome , Let's get started</h2>
      <p>Already have account <nuxt-link :to="`/login`">Log In</nuxt-link></p>

      <form>
        <span>Enter Your Email</span>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="yourmail@gmail.com"
        />

        <span>Full Name</span>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
        />

        <span>Enter Your Password</span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button class="btn">Register</button>
      </form>
    </div>
    <!-- Log In Image -->
    <div class="login-image">
      <img src="@/assets/img/sign-up.jpeg" alt="" />
    </div>
  </div>
</template>


<style scoped>
@import url(../../assets/style.css);
</style>
