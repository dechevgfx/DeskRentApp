import Room from "../models/Room";

export const state = () => ({
    rooms: [
        new Room(
            "Plovdiv, Bulgaria",
            1,
            "Small",
            "Capital City Center",
            [1, 2, 3],
            "manager",
        ),
        new Room(
            "Plovdiv, Bulgaria",
            2,
            "Small",
            "Office Park Center",
            [4, 5, 6],
        ),
        new Room(
            "Pazardjik, Bulgaria",
            3,
            "Small",
            "Grand Hotel HEBAR",
            [7, 8, 9],
        ),
        new Room(
            "Sofia, Bulgaria",
            4,
            "Big",
            "Grand Kanyon Sofia",
            [10, 11, 12, 13, 14, 15],
        ),
        new Room(
            "Sofia, Bulgaria",
            5,
            "Big",
            "Advance Business Center",
            [16, 17, 18, 19, 20, 21],
        ),
        new Room(
            "Sofia, Bulgaria",
            6,
            "Big",
            "Hyatt Hotel Sofia",
            [22, 23, 24, 25, 26, 27],
        ),
    ],
    lastRoomId: 6,
    latestDeskId: 27,
});

export const getter = {
    getRooms(state) {
        return state.rooms;
    },
};

export const mutations = {
    rentDesk(state, [roomId, deskId]) {
        let room = state.rooms.find((x) => x._id === roomId);
        room.rentedDesksCount += 1;
    },
    freeDesk(state, [roomId, deskId]) {
        let room = state.rooms.find((x) => x._id === roomId);
        room.rentedDesksCount -= 1;
    },
};

export const actions = {};
