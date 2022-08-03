<template>
    <section class="desks container" id="desks">
        <div class="heading">
            <h2>OUR ROOMS</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div
            v-if="currentUser.email == 'admin'"
            class="desks-container container"
        >
            <div class="box">
                <button @click="formDisplay = !formDisplay" class="btn add">
                    Add New Room
                </button>
                <AddRoom v-if="formDisplay"></AddRoom>
            </div>
        </div>
        <br />
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
    data () {
        return {
            formDisplay: false
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
};
</script>