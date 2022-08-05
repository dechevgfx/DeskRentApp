<template>
    <section class="desks container" id="desks">
        <div class="container">
            <div class="heading">
                <h2>ACCOUNTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="profile-card">
                <div v-for="user of users">
                    <UsersControl :user="user"></UsersControl>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import UsersControl from "../../components/UsersControl.vue";
export default {
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    components: { UsersControl },
    middleware: ["authentication", "isAdmin"],
};
</script>