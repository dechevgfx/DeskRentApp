<template>
    <div class="space-above">
        <DeskDetails :desk="desk" :room="room" />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        desk() {
            const id = Number(this.$route.params.deskId);
            const desk = this.$store.state.desks.desks.find(
                (x) => x._id === id,
            );
            return desk;
        },
        room() {
            const id = Number(this.$route.params.roomId);
            const room = this.$store.state.rooms.rooms.find(
                (x) => x._id === id,
            );
            return room;
        },
    },
    middleware: ["authentication",]
};
</script>
