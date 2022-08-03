<template>
    <div>
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
        <div>
        <br>
            <div>
            <p>Location {{desk.roomName}}</p>
                <p>Room ID: {{ desk.roomId }} - Desk ID: {{ desk._id }}</p>
                <p>{{ desk.size }} size</p>
                <p>Position: {{ desk.position }}</p>
                <p>Rented until: {{ desk.nextAvailableDate }}</p>
            </div>
            <br>
            <div>
                <button @click="navigate" class="btn">Deteils</button>
                <button @click="freeDesk" class="btn red">Leave</button>
            </div>
        </div>
        <br>
    </div>
    </div>
</template>

<script>
export default {
    props: ["desk"],
    methods: {
        navigate() {
            this.$router.push(
                `/rooms/${this.desk.roomId}/desks/${this.desk._id}`,
            );
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
    },
};
</script>