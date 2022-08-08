<template>
    <div>
        <div class="space-above" />
        <div class="desks-container">
            <div class="heading">
                <br />
                <h2 class="container-line">
                    {{ room.name }} - Desk ID: {{ desk._id }}
                </h2>
                <br />
                <div class="box">
                    <p v-if="desk.nextAvailableDate">
                        Rented until: <span>{{ desk.nextAvailableDate }}</span>
                    </p>
                    <p v-else>Rented until: <span>Not rented yet</span></p>
                </div>
                <br />
                <div class="box">
                    <p v-if="desk.rentedBy">
                        Rented by:
                        <span>{{
                            user.email === desk.rentedBy ? "You" : desk.rentedBy
                        }}</span>
                    </p>
                    <p v-else>Rented by: <span>Not rented yet</span></p>
                </div>
                <br />
                <div class="box">
                    <p>
                        Amount paid:
                        <span
                            >${{ Number(desk.rentedPeriod) * desk.price }}</span
                        >
                    </p>
                </div>
                <br />
                <div class="box" v-if="user.role === 'admin'">
                    <p v-if="room.manager">
                        Manager:
                        <span>{{
                            user.email === room.manager ? "You" : room.manager
                        }}</span>
                    </p>
                </div>
            </div>

            <div class="desks-container container">
                <div class="box">
                    <img
                        v-if="desk.roomId === 1"
                        src="@/assets/img/p1.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId === 2"
                        src="@/assets/img/p2.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId === 3"
                        src="@/assets/img/p3.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId === 4"
                        src="@/assets/img/p4.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId === 5"
                        src="@/assets/img/p5.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId === 6"
                        src="@/assets/img/p6.jpg"
                        alt=""
                    />
                    <img
                        v-if="desk.roomId > 6"
                        src="@/assets/img/newRoom.jpeg"
                        alt=""
                    />
                    <div class="content">
                        <div class="text">
                            <h4>Room Size: {{ room.size.toUpperCase() }}</h4>
                            <h4>Desk Size: {{ desk.size.toUpperCase() }}</h4>
                            <h4>Position: {{ desk.position.toUpperCase() }}</h4>
                            <br />
                            <p v-if="room.size === 'Big'">
                                <strong>
                                    Including: free Wi-Fi, air conditioner,
                                    computer/laptop, comfortable chair, 8
                                    personal cabinets next to the desk, 2 pairs
                                    of headphones and a personal side place to
                                    relax, kitchen, fitness hall.
                                </strong>
                            </p>
                            <p v-else>
                                <strong>
                                    Including: free Wi-Fi, air conditioner,
                                    computer, comfortable chair, four personal
                                    cabinets next to the desk, headphones and a
                                    side place to relax with your colleagues
                                </strong>
                            </p>
                            <br />
                        </div>
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
        return {};
    },
    computed: {
        user() {
            return this.$store.state.currentUser;
        },
    },
};
</script>
