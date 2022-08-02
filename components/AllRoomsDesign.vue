<template>
    <section class="desks container" id="desks">
        <div class="heading">
            <h2>OUR ROOMS</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="desks-container container">
            <ul>
                <li v-for="room of allRooms">
                    <RoomCard :room="room"></RoomCard>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: ["allRooms"],
    data() {
        return {};
    },
};
</script>

<style scoped>
@import url(../assets/style.css);
</style>
