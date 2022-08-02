<template>
    <section class="desks container" id="desks">
        <div class="desks-container container">
                    <div v-for="desk of desks">
                        <DeskCard
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
        return {};
    },
    methods: {},
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
    },
};
</script>
