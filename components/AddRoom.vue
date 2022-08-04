<template>
    <div class="container">
        <div>
            <br />
            <div class="box">
                <input
                    class="no-border"
                    v-model="roomLocation"
                    type="text"
                    placeholder="ENTER ROOM LOCATION"
                />
            </div>
            <div class="box">
                <input
                    class="no-border"
                    v-model="officeName"
                    type="text"
                    placeholder="ENTER OFFICE NAME"
                />
            </div>
            <div class="box">
                <select v-model="size">
                    <option disabled selected value="0">ROOM SIZE</option>
                    <option value="Small">Small</option>
                    <option value="Middle">Big</option>
                </select>
            </div>
            <br />
            <br />
            <button @click="addRoom" class="btn add">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roomLocation: "",
            officeName: "",
            size: "0",
        };
    },
    methods: {
        addRoom() {
            if (
                this.roomLocation !== "" &&
                this.officeName !== "" &&
                this.size !== ""
            ) {
                this.$store.commit("rooms/addNewRoom", [
                    this.roomLocation,
                    this.officeName,
                    this.size,
                ]);
                const newRoom =
                    this.$store.state.rooms.rooms[
                        this.$store.state.rooms.rooms.length - 1
                    ];
                this.$store.commit("desks/addNewRoom", [
                    this.roomLocation,
                    this.officeName,
                    this.size,
                ]);

                this.roomLocation = "";
                this.officeName = "";
                this.size = "0";
            }
        },
    },
    computed: {
        rooms() {
            return this.$store.state.rooms.rooms;
        },
    },
};
</script>