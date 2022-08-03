<template>
    <section class="desks container" id="desks">
        <div class="heading">
            <h2>Your BOOKINGS</h2>
            <p v-if="this.$store.state.currentUser.rentedDesks">
                For managing your booking go to profile page!
            </p>
            <br>
            <div v-if="!this.$store.state.currentUser.rentedDesks" class="desks-container container">
                <p class="centre">You don't have any bookings.</p>
            </div>
            <br />
            <div v-if="desks.length < 1" class="desks-container container">
                <button class="btn">
                    <nuxt-link :to="`/rooms`">VIEW OUR ROOMS</nuxt-link>
                </button>
            </div>
        </div>
        <div v-if="desks.length > 0" class="desks-container container">
            <ul>
                <li v-for="desk of desks">
                    <div class="box">
                        <img
                            v-if="desk.roomId === 1"
                            src="@/assets/img/p1.jpg"
                        />
                        <img
                            v-if="desk.roomId === 2"
                            src="@/assets/img/p2.jpg"
                        />
                        <img
                            v-if="desk.roomId === 3"
                            src="@/assets/img/p3.jpg"
                        />
                        <img
                            v-if="desk.roomId === 4"
                            src="@/assets/img/p4.jpg"
                        />
                        <img
                            v-if="desk.roomId === 5"
                            src="@/assets/img/p5.jpg"
                        />
                        <img
                            v-if="desk.roomId === 6"
                            src="@/assets/img/p6.jpg"
                        />
                        <img
                            v-if="desk.roomId > 6"
                            src="@/assets/img/newRoom.jpeg"
                        />
                        <div class="content">
                            <div class="text">
                                <p>Location: {{ desk.roomName }}</p>
                                <p>Desk ID: {{ desk._id }}</p>
                            </div>
                            <div>
                                <h3 class="centre">
                                    <span>
                                        RENTED UNTIL:
                                        {{
                                            desk.nextAvailableDate
                                                ? desk.nextAvailableDate
                                                : "Available NOW!"
                                        }}</span
                                    >
                                </h3>
                            </div>
                            <div>
                                <nuxt-link
                                    class="btn"
                                    :to="`/rooms/${desk.roomId}/desks/${desk._id}`"
                                    >Details</nuxt-link
                                >
                            </div>
                        </div>
                    </div>
                    <br />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        room() {
            return this.$store.state.rooms.rooms;
        },
        desks() {
            const desksArr = [];
            const deskIds = this.$store.state.currentUser.rentedDesks;
            const allDesks = this.$store.state.desks.desks;
            allDesks.forEach((desk) => {
                if (deskIds.includes(desk._id)) {
                    desksArr.push(desk);
                }
            });
            return desksArr;
        },
    },
};
</script>