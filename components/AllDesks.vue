<template>
    <section class="desks container" id="desks">
        <br />
        <div
            v-if="room.manager == currentUser.email"
            class="desks-container container"
        >
            <div class="box">
                <button @click="showForm = !showForm" class="btn add">
                    ADD NEW DESK
                </button>
                <AddDesk v-if="showForm"></AddDesk>
            </div>
        </div>

        <div class="desks-container container">
            <div v-for="desk of desks">
                <DeskCard
                    @formDisplay="displayContent"
                    :room="room"
                    :desk="desk"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showForm: false,
        };
    },
    methods: {
        displayContent() {
            this.$emit("formDisplay");
        },
    },
    computed: {
        room() {
            const id = Number(this.$route.params.roomId);
            const room = this.$store.state.rooms.rooms.find(
                (location) => location._id === id,
            );
            return room;
        },
        desks() {
            let desks = [];
            for (const id of this.room.deskIds) {
                const desk = this.$store.state.desks.desks.find(
                    (space) => space._id === id,
                );
                desks.push(desk);
            }
            return desks;
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
};
</script>
