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
                <br />

                <div class="flex">
                    <div class="centre">
                        <p>
                            Room ID: <strong>{{ desk.roomId }}</strong>
                        </p>
                        <p>
                            Desk ID:
                            <strong>{{ desk._id }}</strong>
                        </p>
                        <p>
                            Available on:
                            <strong>
                                {{
                                    desk.nextAvailableDate
                                        ? desk.nextAvailableDate
                                        : "NOW"
                                }}</strong
                            >
                        </p>
                        <p v-if="desk.nextAvailableDate">
                            Rented by: <strong>{{ desk.rentedBy }}</strong>
                        </p>
                    </div>
                    <hr class="hr" />
                    <div class="centre">
                        <p>
                            Desk Size: <strong>{{ desk.size }}</strong>
                        </p>
                        <p>
                            Desk Position: <strong>{{ desk.position }}</strong>
                        </p>
                    </div>
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
