<template>
    <section class="desks container" id="desks">
        <div class="heading">
            <h2>DESKS</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="desks-container container">
            <div class="box">
                <button @click="formDisplay = !formDisplay" class="btn add">
                    ADD NEW DESK
                </button>
                <AddDesk v-if="formDisplay"></AddDesk>
            </div>
        </div>
        <br />
        <div class="desks-container container">
            <div v-if="desks.length > 0">
                <ul>
                    <li v-for="desk of desks">
                        <DeskControl :desk="desk"></DeskControl>
                    </li>
                </ul>
            </div>
            <div v-else class="box">
                <p class="centre">There are no desks added</p>
            </div>
        </div>
    </section>
</template>

<script>
import DeskControl from "../../components/DeskControl.vue";
export default {
    data() {
        return {
            formDisplay: false,
        };
    },
    computed: {
        // user() {
        //     return this.$store.state.rooms.rooms;
        // },
        desks() {
            return this.$store.state.desks.desks;
        },
    },
    singleRoomDesks() {
        let deskArr = [];
        for (const desk of this.$store.state.desks.desks) {
            if (desk.roomId == this.$store.state.rooms.rooms.roomsManaged)
                deskArr.push(desk);
        }
        return deskArr;
    },
    components: { DeskControl },
    middleware: ["authentication", "isAdmin"],
};
</script>