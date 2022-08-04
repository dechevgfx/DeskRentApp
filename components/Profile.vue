<template>
    <section class="desks container" id="desks">
        <div class="desks-container container">
            <div class="box">
                <img src="@/assets/img/User.png" alt="" max-width="80px" />

                <div class="content">
                    <h2 class="name">{{ user.name }}</h2>
                    <h3 class="email">
                        <a href="mailto:yourmail@mail.com">{{ user.email }}</a>
                    </h3>
                    <h3 class="grided">
                        <button class="btn" @click="handleLogout">
                            LOGOUT
                        </button>
                        <br />
                            <button v-if="user.role == 'RoomManager'" class="btn">
                                <nuxt-link
                                    :to="`/rooms/${user.roomsManaged}/desks`"
                                    >MANAGE ROOM</nuxt-link
                                >
                            </button>
                    </h3>
                </div>
                <br />
                <div class="centre">
                    <button
                        v-if="!isShow"
                        class="btn-b"
                        @click="isShow = !isShow"
                    >
                        SHOW LIST
                    </button>
                    <button v-else class="btn-b" @click="isShow = !isShow">
                        HIDE LIST
                    </button>
                    <br />
                    <p v-if="!isShow">Click here to see your desks.</p>
                    <p v-if="isShow && desks.length < 1">
                        You don't have any bookings.
                    </p>
                    <br />
                    <button v-if="isShow && desks.length < 1" class="btn">
                        <nuxt-link :to="`/rooms`">VIEW OUR ROOMS</nuxt-link>
                    </button>
                </div>
                <br />
                <div v-if="isShow">
                    <div v-for="desk of desks">
                        <ProfileDesk :desk="desk"></ProfileDesk>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: function () {
        return {
            isShow: false,
        };
    },
    methods: {
        handleLogout() {
            this.$store.commit("logout");
            this.$router.push("/login");
        },
    },
    computed: {
        room() {
            return this.$store.state.rooms.rooms;
        },
        user() {
            return this.$store.state.currentUser;
        },
        desks() {
            const desksArr = [];
            const deskIds = this.$store.state.currentUser.rentedDesks;
            const allDesks = this.$store.state.desks.desks;
            allDesks.forEach((x) => {
                if (deskIds.includes(x._id)) {
                    desksArr.push(x);
                }
            });
            return desksArr;
        },
    },
    middleware: "authentication",
};
</script>
