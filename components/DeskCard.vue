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
            <div class="flex">
                <br />
                <div class="content centre">
                    <div class="text">
                        <h5 v-if="desk.rentedBy === currentUser.email">
                            RENTED BY YOU!
                        </h5>
                        <h5 v-else>
                            Available:
                            <span>{{
                                desk.isTaken
                                    ? `From ${desk.nextAvailableDate}`
                                    : "NOW"
                            }}</span>
                        </h5>
                        <br />
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
                    <br />
                    <div :class="showLink ? 'grided':''">
                        <br />
                        <button
                            v-if="!desk.isTaken"
                            @click="displayContent"
                            class="btn"
                        >
                            Rent
                        </button>
                        <button
                            v-if="
                                desk.rentedBy === currentUser.email &&
                                currentUser.role !== 'admin' &&
                                currentUser.role !== 'RoomManager'
                            "
                            class="btn"
                        >
                            <NuxtLink :to="`desks/${desk._id}`" v-if="showLink"
                                >Details</NuxtLink
                            >
                        </button>
                        <br />
                        <button
                            v-if="
                                currentUser.role === 'admin' ||
                                (currentUser.role === 'RoomManager' &&
                                    desk.roomId == currentUser.roomsManaged)
                            "
                            class="btn"
                        >
                            <NuxtLink :to="`desks/${desk._id}`" v-if="showLink"
                                >Details</NuxtLink
                            >
                        </button>
                        <br>
                        <button
                            @click="freeDesk"
                            v-if="
                                currentUser.role === 'RoomManager' &&
                                desk.roomId == currentUser.roomsManaged &&
                                desk.isTaken
                            "
                            class="btn yellow"
                        >
                            <NuxtLink :to="`desks`" v-if="showLink"
                                >Release</NuxtLink
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["desk", "room"],
    data() {
        return {
            formDisplay: false,
        };
    },
    methods: {
        freeDesk() {
            this.$store.commit("removeRentedDesk", [
                this.desk._id,
                this.desk.rentedBy,
            ]);
            this.$store.commit("desks/freeDesk", this.desk._id);
            this.$store.commit("rooms/freeDesk", [
                this.desk.roomId,
                this.desk._id,
            ]);
        },
        displayContent() {
            this.$store.commit("desks/selectDeskToRent", this.desk);
            this.$emit("formDisplay");
        },
    },
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
        showLink() {
            return (
                this.currentUser.role === "admin" ||
                this.room.manager === this.currentUser.email ||
                this.desk.rentedBy === this.currentUser.email
            );
        },
    },
};
</script>
