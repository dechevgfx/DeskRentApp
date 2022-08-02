<template>
    <div>
        <AllRoomsDesign :allRooms="allRooms"></AllRoomsDesign>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        allRooms() {
            return this.$store.state.rooms.rooms;
        },
    },
    middleware: ["authentication", "isAdmin"],
};
</script>
<style>
@import url(../../assets/style.css);
</style>
