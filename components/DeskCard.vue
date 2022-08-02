<template>
    <div>
        <br />
        <div class="box">
            <img v-if="desk.roomId === 1" src="@/assets/img/p1.jpg" alt="" />
            <img v-if="desk.roomId === 2" src="@/assets/img/p2.jpg" alt="" />
            <img v-if="desk.roomId === 3" src="@/assets/img/p3.jpg" alt="" />
            <img v-if="desk.roomId === 4" src="@/assets/img/p4.jpg" alt="" />
            <img v-if="desk.roomId === 5" src="@/assets/img/p5.jpg" alt="" />
            <img v-if="desk.roomId === 6" src="@/assets/img/p6.jpg" alt="" />
            <img v-if="desk.roomId > 6" src="@/assets/img/newRoom.jpeg" />
            <div>
                <br />
                <h5 v-if="desk.rentedBy === currentUser.email">
                    RENTED BY YOU!
                </h5>
                <h5 v-else>
                    Available:
                    <span>{{
                        desk.isTaken ? `From ${desk.nextAvailableDate}` : "NOW"
                    }}</span>
                </h5>
                <br />
                <button
                    v-if="!desk.isTaken"
                    class="btn"
                >
                    <a href="#top">Rent</a>
                </button>
                <button
                    v-if="
                        desk.rentedBy === currentUser.email &&
                        currentUser.role !== 'admin' &&
                        currentUser.role !== 'RoomManager'
                    "
                    class="btn"
                >
                    <NuxtLink :to="`desks/${desk._id}`" v-if="goTo"
                        >Details</NuxtLink
                    >
                </button>
                <button
                    v-if="
                        currentUser.role === 'admin' ||
                        (currentUser.role === 'RoomManager' &&
                            desk.roomId == currentUser.roomsManaged)
                    "
                    class="btn"
                >
                    <NuxtLink :to="`desks/${desk._id}`" v-if="goTo"
                        >Details</NuxtLink
                    >
                </button>
                <button
                    @click="freeDesk"
                    v-if="
                        currentUser.role === 'RoomManager' &&
                        desk.roomId == currentUser.roomsManaged &&
                        desk.isTaken
                    "
                    class="btn"
                >
                    <NuxtLink :to="`desks`" v-if="goTo">Release</NuxtLink>
                </button>
            </div>

            <div class="content">
                <div class="text">
                    <h3>{{ roomName }}</h3>
                    <p>{{ location }}</p>
                    <p>
                        Size: <span>{{ desk.size }}</span>
                    </p>
                    <p>
                        Position: <span>{{ desk.position }}</span>
                    </p>
                    <p>
                        <strong>
                            Price: <span>${{ desk.price }} per week</span>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["desk", "room"],
    data() {
        return {};
    },
    methods: {},
    computed: {
        location() {
            return this.room.city;
        },
        roomName() {
            return this.room.name;
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
        goTo() {
            return (
                this.currentUser.role === "admin" ||
                this.room.manager === this.currentUser.email ||
                this.desk.rentedBy === this.currentUser.email
            );
        },
    },
};
</script>