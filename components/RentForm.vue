<template>
    <div>
        <div class="more-space"></div>
        <div v-if="!deskRented && !desk.isTaken">
            <div class="desks-container">
                <div class="heading">
                    <br />
                    <h2 class="container-line">RENT YOU'R SPACE</h2>
                    <br />
                    <div class="box">
                        <p>{{ room[desk.roomId - 1].name }}</p>
                    </div>
                    <br />
                    <div class="box">
                        <p>Size: {{ desk.size }}</p>
                    </div>
                    <br />
                    <div class="box">
                        <p>Position: {{ desk.position }}</p>
                    </div>
                    <br />
                    <div class="box" @click="selectedDuration++">
                        <input
                            readonly
                            class="input-form"
                            @click="click"
                            v-model="selectedDuration"
                            placeholder="WEEKS"
                        />
                    </div>
                </div>
            </div>
            <div class="heading">
                <h2 class="container-line">Total: ${{ amount }}</h2>
                <br />
                <button
                    v-if="selectedDuration > 0"
                    @click="rentDeskHandler"
                    class="btn"
                >
                    Rent Desk
                </button>
                <button @click="selectedDuration = ''" class="btn">
                    RESET
                </button>
            </div>
        </div>
        <div v-else>
        <br><br>
            <div v-show="visible" class="rent-complete">
                <button class="btn space-above">
                    <NuxtLink :to="`desks/${desk._id}`">DESK DETAILS</NuxtLink>
                </button>
                <br />
                <div class="space"><h2>Desk rented successfully!</h2></div>

                <br />
                <NuxtLink :to="`/`" class="container-line">HOME</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDuration: "",
            deskRented: false,
            visible: true
        };
    },
    created(){
        setTimeout(()=>(this.visible = false), 10000)
    },
    methods: {
        click(e) {
            this.amountT = Number(this.desk.price) * Number(e.target.value);
        },
        rentDeskHandler(e) {
            this.$store.commit("desks/rentDesk", [
                this.desk._id,
                this.currentUser.email,
                this.selectedDuration,
            ]);
            this.$store.commit("rooms/rentDesk", [
                this.desk.roomId,
                this.desk._id,
            ]);
            this.$store.commit("addRentedDesk", this.desk._id);
            this.deskRented = true;
        },
    },
    computed: {
        desk() {
            return this.$store.state.desks.selectedDeskToRent;
        },
        deskID() {
            return this.desk._id;
        },
        room() {
            return this.$store.state.rooms.rooms;
        },
        amount() {
            return Number(this.desk.price) * Number(this.selectedDuration);
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
};
</script>

