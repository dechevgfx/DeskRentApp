<template>
  <!-- Navbar -->
  <header>
    <div class="nav container">
      <!-- Logo -->
      <NuxtLink to="`/`" class="logo">DESK RENT</NuxtLink>
      <!-- Nav List -->
      <ul class="navbar">
        <li>
          <NuxtLink :to="`/bookings`">Bookings</NuxtLink>
        </li>
        <li><NuxtLink :to="`/rooms`">Rooms</NuxtLink></li>
        <li>
          <NuxtLink :to="`/desks`">Desks</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/users`">Users</NuxtLink>
        </li>
      </ul>
      <!-- Log In Button -->
      <div>
        <button class="btn">
          <NuxtLink :to="`/profile`">PROFILE</NuxtLink>
        </button>
      </div>
      <div>
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
}
</script>

<style scoped>
@import url(../assets/style.css);
</style>
