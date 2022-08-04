<template>
    <div class="container">
        <div>
            <br />
            <div class="box">
                <select v-model="deskRoomId">
                    <option disabled selected value="0">ROOM ID</option>
                        <option v-if="currentUser.role == 'RoomManager'" :value="currentUser.roomsManaged[0]">
                            Room ID: {{ currentUser.roomsManaged[0] }}
                        </option>
                        <option v-if="currentUser.role == 'admin'" v-for="room of rooms" :value="room._id">
                            Room ID: {{ room._id }}
                        </option>
                </select>
            </div>
            <br />
            <div class="box">
                <select v-model="size">
                    <option disabled selected value="0">DESK SIZE</option>
                    <option value="Small">Small</option>
                    <option value="Middle">Middle</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <br />
            <div class="box">
                <select v-model="position">
                    <option disabled selected value="0">DESK POSITION</option>
                    <option value="Left">Left</option>
                    <option value="Center">Center</option>
                    <option value="Left">Left</option>
                </select>
            </div>
            <br />
            <div class="box">
                <input
                    class="no-border"
                    v-model="price"
                    type="number"
                    placeholder="ENTER DESK PRICE"
                />
            </div>
            <br />
            <button @click="addDesk" class="btn add">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deskRoomId: "0",
            size: "0",
            position: "0",
            price: "ENTER DESK PRICE",
        };
    },
    methods: {
        addDesk() {
            if (
                this.deskRoomId !== "0" &&
                this.size !== "0" &&
                this.position !== "0" &&
                this.price !== "0" &&
                Number(this.price) > 0 &&
                !Number.isNaN(Number(this.price))
            ) {
                this.$store.commit("desks/addNewDesk", [
                    this.deskRoomId,
                    this.size,
                    this.position,
                    this.price,
                ]);
                const newDesk =
                    this.$store.state.desks.desks[
                        this.$store.state.desks.desks.length - 1
                    ];
                this.$store.commit("rooms/addNewDesk", [
                    newDesk.roomId,
                    newDesk._id,
                ]);
                this.deskRoomId = "0";
                this.size = "0";
                this.position = "0";
                this.price = "";
            }
        },
    },
    computed: {
        rooms() {
            return this.$store.state.rooms.rooms;
        },
        currentUser() {
            return this.$store.state.currentUser
        }
    },
};
</script>
