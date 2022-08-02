<template>
  <!-- Navbar -->
  <header>
    <div class="nav container">
      <!-- Logo -->
      <NuxtLink class="logo" :to="`/`">DESK RENT</NuxtLink>
      <!-- Nav List -->
      <ul class="navbar">
        <li v-if="user">
          <NuxtLink :to="`/bookings`">Bookings</NuxtLink>
        </li>
        <li v-if="user"><NuxtLink :to="`/rooms`">Rooms</NuxtLink></li>
        <li v-if="user && user.role === 'admin'">
          <NuxtLink :to="`/desks`">Desks</NuxtLink>
        </li>
        <li v-if="user && user.role === 'admin'">
          <NuxtLink :to="`/users`">Users</NuxtLink>
        </li>
      </ul>
      <!-- Log In Button -->
      <div v-if="user">
        <button class="btn">
          <NuxtLink :to="`/profile`">PROFILE</NuxtLink>
        </button>
      </div>
      <div v-if="!user">
        <button class="btn">
          <NuxtLink :to="`/login`">Log In</NuxtLink>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
      user() {
        return this.$store.state.currentUser;
      }
    }
}
</script>

<style scoped>
@import url(../assets/style.css);
</style>
