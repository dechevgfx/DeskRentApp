<template>
    <div>
        <div
            @click="navigateToRoom"
            class="box hovered-box"
        >
            <img v-if="roomID == 1" src="@/assets/img/p1.jpg" />
            <img v-if="roomID == 2" src="@/assets/img/p2.jpg" />
            <img v-if="roomID == 3" src="@/assets/img/p3.jpg" />
            <img v-if="roomID == 4" src="@/assets/img/p4.jpg" />
            <img v-if="roomID == 5" src="@/assets/img/p5.jpg" />
            <img v-if="roomID == 6" src="@/assets/img/p6.jpg" />
            <img v-if="roomID > 6" src="@/assets/img/newRoom.jpeg" />

            <div class="content">
                <div class="text">
                    <h3>{{ room.name.toUpperCase() }}</h3>
                    <p>{{ location }}</p>
                    <p>Room Size: {{ room.size }}</p>
                </div>
                <div>
                    <span>Available spaces: {{ freeSpaces }}</span>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    props: ["room"],
    data() {
        return {};
    },
    methods: {
        navigateToRoom() {
            this.$router.push(`rooms/${this.room._id}`);
        },
    },
    computed: {
        roomID() {
            return this.room._id;
        },
        location() {
            return this.room.city;
        },
        freeSpaces() {
            return this.room.deskCapacity - this.room.rentedDesksCount;
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
};
</script>