<template>
    <div>
        <br />
        <h5
            class="centre container-line"
            v-if="desk.rentedBy === currentUser.email"
        >
            RENTED BY YOU!
        </h5>
        <h5 class="centre container-line" v-else>
            Available:
            <span>{{
                desk.isTaken ? `From ${desk.nextAvailableDate}` : "NOW"
            }}</span>
        </h5>
        <br />
        <div class="centre">
            <button
                v-if="
                    currentUser.role === 'RoomManager' &&
                    desk.roomId == currentUser.roomsManaged
                "
                @click="deleteDesk"
                class="btn red"
            >
                Remove Desk
            </button>
        </div>

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
                    <div :class="showLink ? 'grided' : 'fix'">
                        <br />
                        <button
                            v-if="!desk.isTaken"
                            @click="displayContent"
                            class="btn"
                        >
                            Rent
                        </button>
                        <button
                            @click="freeDesk"
                            v-if="
                                (currentUser.role === 'RoomManager' &&
                                    desk.roomId == currentUser.roomsManaged &&
                                    desk.isTaken) ||
                                (currentUser.role === 'admin' &&
                                    desk.isTaken &&
                                    desk.rentedBy !== 'admin')
                            "
                            class="btn yellow"
                        >
                            <NuxtLink :to="`desks`" v-if="showLink"
                                >Release</NuxtLink
                            >
                        </button>
                        <button
                            class="btn"
                            v-if="
                                (desk.rentedBy === currentUser.email &&
                                    currentUser.role == 'client') ||
                                (desk.rentedBy === currentUser.email &&
                                    currentUser.roomsManaged[0] !== desk.roomId)
                            "
                        >
                            <NuxtLink :to="`/profile`">Profile</NuxtLink>
                        </button>
                        <br />
                        <button
                            v-if="
                                currentUser.role === 'admin' ||
                                (currentUser.role === 'RoomManager' &&
                                    desk.roomId == currentUser.roomsManaged) ||
                                (desk.rentedBy === currentUser.email &&
                                    currentUser.role == 'client')
                            "
                            class="btn"
                        >
                            <NuxtLink :to="`desks/${desk._id}`" v-if="showLink"
                                >Details</NuxtLink
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
        deleteDesk() {
            if (this.desk.isTaken) {
                this.$store.commit("removeRentedDesk", [
                    this.desk._id,
                    this.desk.rentedBy,
                ]);
                this.$store.commit("rooms/freeDesk", [
                    this.desk.roomId,
                    this.desk._id,
                ]);
            }
            this.$store.commit("rooms/remove", [
                this.desk.roomId,
                this.desk._id,
            ]);
            this.$store.commit("desks/remove", this.desk._id);
        },
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
