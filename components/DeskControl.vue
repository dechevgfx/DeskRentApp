<template>
    <div>
        <div class="box">
            <img v-if="desk.roomId == 1" src="../assets/img/p1.jpg" />
            <img v-if="desk.roomId == 2" src="../assets/img/p2.jpg" />
            <img v-if="desk.roomId == 3" src="../assets/img/p3.jpg" />
            <img v-if="desk.roomId == 4" src="../assets/img/p4.jpg" />
            <img v-if="desk.roomId == 5" src="../assets/img/p5.jpg" />
            <img v-if="desk.roomId == 6" src="../assets/img/p6.jpg" />
            <img v-if="desk.roomId > 6" src="../assets/img/newRoom.jpeg" />
            <div>
                <div>
                    <p>Room ID: {{ desk.roomId }} - Desk ID: {{ desk._id }}</p>
                    <p>Desk Size: {{ desk.size }}</p>
                    <p>Desk Position: {{ desk.position }}</p>
                    <p>
                        Available on:
                        {{
                            desk.nextAvailableDate
                                ? desk.nextAvailableDate
                                : "NOW"
                        }}
                    </p>
                    <p v-if="desk.nextAvailableDate">
                        Rented by: {{ desk.rentedBy }}
                    </p>
                </div>
                <br />
                <div class="grided">
                    <button @click="deleteDesk" class="btn red">
                        Remove Desk
                    </button>
                    <br />
                    <button
                        @click="freeDesk"
                        :class="!desk.isTaken ? 'btn opacity' : 'btn'"
                        :disabled="!desk.isTaken"
                    >
                        Free Desk
                    </button>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    props: ["desk"],
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
    },
};
</script>