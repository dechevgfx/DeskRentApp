<template>
    <div>
        <div class="space-above" />
        <div class="desks-container">
            <div class="heading">
                <br />
                <h1 class="container-line">{{ room.name }}</h1>
                <p class="left">{{ room.city }}</p>
            </div>
            <div class="desks-container container">
                <div class="box">
                    <img v-if="roomID == 1" src="@/assets/img/p1.jpg" />
                    <img v-if="roomID == 2" src="@/assets/img/p2.jpg" />
                    <img v-if="roomID == 3" src="@/assets/img/p3.jpg" />
                    <img v-if="roomID == 4" src="@/assets/img/p4.jpg" />
                    <img v-if="roomID == 5" src="@/assets/img/p5.jpg" />
                    <img v-if="roomID == 6" src="@/assets/img/p6.jpg" />
                    <img v-if="roomID > 6" src="../assets/img/newRoom.jpeg" />
                    <div class="content">
                        <div class="text">
                            <h2>{{ room.size }} ROOM</h2>
                            <br />
                            <p v-if="room.size === 'Big'">
                                <br />Including: free Wi-Fi, air conditioner,
                                computer/laptop, comfortable chair, 8 personal
                                cabinets next to the desk, 2 pairs of headphones
                                and a personal side place to relax, kitchen,
                                fitness hall.
                            </p>
                            <p v-else>
                                Including: free Wi-Fi, air conditioner,
                                computer, comfortable chair, four personal
                                cabinets next to the desk, headphones and a side
                                place to relax with your colleagues
                            </p>
                            <br />
                            <div class="grided">
                                <p>
                                    Maximum Capacity:
                                    {{ room.deskCapacity }} spaces
                                </p>
                                <span>Available: {{ freeSpaces }}</span>
                                <br />

                                <NuxtLink
                                    v-if="freeSpaces > 0"
                                    :to="`/rooms/${room._id}/desks`"
                                    class="btn"
                                >
                                    BOOK</NuxtLink
                                >
                                <div v-if="freeSpaces == 0">
                                    <p>NO AVAILABLE SPACES</p>
                                    <NuxtLink class="btn" v-if="user.role == 'admin'"
                                        >GO TO DESKS PAGE</NuxtLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.state.currentUser;
        },

        roomID() {
            return this.room._id;
        },
        room() {
            const id = Number(this.$route.params.roomId);
            const room = this.$store.state.rooms.rooms.find(
                (x) => x._id === id,
            );

            return room;
        },

        freeSpaces() {
            return this.room.deskCapacity - this.room.rentedDesksCount;
        },
    },
};
</script>

