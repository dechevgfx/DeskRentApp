<template>
    <div class="grided container-line">
        <section class="desks container backgr">
            <div class="desks-container container">
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <h1>{{ user.name }}</h1>
                            <p>
                                <span>{{ user.email }} </span>
                            </p>
                            <p>
                                <span
                                    >{{ user.role
                                    }}{{
                                        user.roomsManaged.length > 0
                                            ? `: ${user.roomsManaged[0]}`
                                            : ""
                                    }}</span
                                >
                            </p>
                            <p>
                                Rented desks:
                                <span>{{ user.rentedDesks.length }}</span>
                            </p>
                        </div>
                        <div class="button-container">
                            <div v-if="user.role === 'client'">
                                <button
                                    v-if="!promoteActive"
                                    @click="promoteActive = true"
                                    class="btn"
                                >
                                    Promote
                                </button>
                                <div v-if="promoteActive">
                                    <div class="box">
                                        <select v-model="roomId">
                                            <option disabled selected value="">
                                                Room ID
                                            </option>
                                            <option
                                                v-for="room of roomsWithoutManager"
                                                :value="room._id"
                                            >
                                                Room {{ room._id }}
                                            </option>
                                        </select>
                                    </div>

                                    <button
                                        :disabled="!roomId"
                                        @click="promote"
                                        class="btn"
                                    >
                                        Promote
                                    </button>
                                </div>
                            </div>
                            <div v-if="user.role === 'RoomManager'">
                                <button class="btn yellow" @click="demote">
                                    Demote
                                </button>
                            </div>

                            <button
                                v-if="user.role !== 'admin'"
                                @click="ban"
                                class="btn red"
                            >
                                Ban
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ["user"],
    data() {
        return {
            promoteActive: false,
            roomId: "",
        };
    },
    methods: {
        promote() {
            this.$store.commit("rooms/changeRoomManager", [
                this.roomId,
                this.user.email,
            ]);
            this.$store.commit("promoteToManager", this.user.email);
            this.$store.commit("addManagedRoom", [
                this.roomId,
                this.user.email,
            ]);

            this.promoteActive = false;
            this.roomId = "";
        },
        demote() {
            this.$store.commit(
                "rooms/demoteRoomManager",
                this.user.roomsManaged[0],
            );
            this.$store.commit("demoteManager", this.user.email);
            this.$store.commit("removeManagedRoom", [
                this.roomId,
                this.user.email,
            ]);
        },
        ban() {
            if (this.user.roomsManaged[0]) {
                this.demote();
            }

            if (this.user.rentedDesks.length) {
                for (const deskId of this.user.rentedDesks) {
                    const desk = this.$store.state.desks.desks.find(
                        (current) => current._id === deskId,
                    );
                    this.$store.commit("desks/freeDesk", deskId);
                    this.$store.commit("rooms/freeDesk", [desk.roomId, deskId]);
                }
            }

            this.$store.commit("banUser", this.user.email);
        },
    },
    computed: {
        roomsWithoutManager() {
            return this.$store.state.rooms.rooms.filter(
                (current) => current.manager === "admin",
            );
        },
    },
};
</script>
