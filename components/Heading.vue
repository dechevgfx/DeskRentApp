<template>
    <!-- Navbar -->
    <header>
        <div class="nav container">
            <!-- Logo -->
            <NuxtLink class="logo" to="/">DESK RENT</NuxtLink>
            <!-- Nav List -->
            <ul class="navbar" v-if="windowWidth >= 638">
                <li v-if="user">
                    <NuxtLink :to="`/bookings`">Bookings</NuxtLink>
                </li>
                <li v-if="user">
                    <NuxtLink :to="`/rooms`">Rooms</NuxtLink>
                </li>
                <li v-if="user && user.role == 'admin'">
                    <NuxtLink :to="`/desks`">Desks</NuxtLink>
                </li>
                <li v-if="user && user.role === 'admin'">
                    <NuxtLink :to="`/users`">Users</NuxtLink>
                </li>
            </ul>
            <ul class="navbar-mobile" v-if="windowWidth < 638">
                <li v-if="user">
                    <NuxtLink :to="`/bookings`">
                        <div class="mobile-text">
                            <font-awesome-icon icon="fa-solid fa-calendar" />
                            <p class="very-small-text">BOOKINGS</p>
                        </div>
                    </NuxtLink>
                </li>
                <li v-if="user">
                    <NuxtLink :to="`/rooms`"
                        ><div class="mobile-text">
                            <font-awesome-icon icon="fa-solid fa-building" />
                            <p class="very-small-text">ROOMS</p>
                        </div>
                    </NuxtLink>
                </li>
                <li v-if="user && user.role == 'admin'">
                    <NuxtLink :to="`/desks`"
                        ><div class="mobile-text">
                            <font-awesome-icon icon="fa-solid fa-desktop" />
                            <p class="very-small-text">DESKS</p>
                        </div>
                    </NuxtLink>
                </li>
                <li v-if="user && user.role === 'admin'">
                    <NuxtLink :to="`/users`"
                        ><div class="mobile-text">
                            <font-awesome-icon icon="fa-solid fa-users" />
                            <p class="very-small-text">USERS</p>
                        </div>
                    </NuxtLink>
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
import Vue from "vue";
import VueWindowSize from "vue-window-size";
Vue.use(VueWindowSize);
export default {
    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.state.currentUser;
        },
    },
};
</script>
<style scoped></style>
