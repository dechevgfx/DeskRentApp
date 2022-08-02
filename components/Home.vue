<template>
    <div>
        <br />
        <section class="home container" id="home">
            <div v-if="!user" class="home-text">
                <h1>Find Your <br />Perfect <br />Workspace.</h1>
                <button class="btn">
                    <nuxt-link :to="`/register`">Sign Up</nuxt-link>
                </button>
            </div>
            <div v-else class="home-text">
                <h1>Welcome <br />back, <br />{{ user.name }}</h1>
                <button class="btn">
                    <nuxt-link :to="`/rooms`">View Our Rooms</nuxt-link>
                </button>
            </div>
        </section>
        <!-- Sales -->
        <section class="room-type container" id="room-type">
            <!-- Box 1 -->
            <div class="box type-of-rooms">
                <h3>LARGE ROOMS</h3>
                <div class="container-line"></div>
                <p>
                    <br />
                    Free Wi-Fi, air conditioner, computer/laptop, comfortable
                    chair, 8 personal cabinets next to the desk, 2 pairs of
                    headphones and a personal side place to relax, kitchen,
                    fitness hall.
                </p>
                <br />
            </div>
            <!-- Box 2 -->
            <div class="box type-of-rooms" id="timeout">
                <h3>SMALL ROOMS</h3>
                <div class="container-line"></div>
                <p>
                    <br />Free Wi-Fi, air conditioner, computer, comfortable
                    chair, four personal cabinets next to the desk, headphones
                    and a side place to relax with your colleagues.
                </p>
                <br />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ["desk", "room"],
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