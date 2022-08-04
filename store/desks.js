import Desk from "../models/Desk";
import { getDeskFreeDate } from "../helpers/formatDate";

export const state = () => ({
    desks: [
        new Desk(1, 129, "Large", "Left", 1, "Capital City Center"),
        new Desk(2, 99, "Middle", "Center", 1, "Capital City Center"),
        new Desk(3, 119, "Middle", "Right", 1, "Capital City Center"),
        new Desk(4, 139, "Large", "Left", 2, "Office Park Center"),
        new Desk(5, 129, "Middle", "Center", 2, "Office Park Center"),
        new Desk(6, 119, "Large", "Right", 2, "Office Park Center"),
        new Desk(7, 139, "Large", "Left", 3, "Grand Hotel HEBAR"),
        new Desk(8, 129, "Large", "Center", 3, "Grand Hotel HEBAR"),
        new Desk(9, 119, "Middle", "Right", 3, "Grand Hotel HEBAR"),
        new Desk(10, 189, "Large", "Right", 4, "Grand Kanyon Sofia"),
        new Desk(11, 159, "Middle", "Left", 4, "Grand Kanyon Sofia"),
        new Desk(12, 159, "Middle", "Left", 4, "Grand Kanyon Sofia"),
        new Desk(13, 159, "Middle", "Left", 4, "Grand Kanyon Sofia"),
        new Desk(14, 159, "Middle", "Left", 4, "Grand Kanyon Sofia"),
        new Desk(15, 159, "Middle", "Left", 4, "Grand Kanyon Sofia"),
        new Desk(16, 169, "Large", "Center", 5, "Advance Business Center"),
        new Desk(17, 169, "Small", "Right", 5, "Advance Business Center"),
        new Desk(18, 229, "Large", "Right", 5, "Advance Business Center"),
        new Desk(19, 199, "Small", "Left", 5, "Advance Business Center"),
        new Desk(20, 169, "Large", "Center", 5, "Advance Business Center"),
        new Desk(21, 169, "Small", "Right", 5, "Advance Business Center"),
        new Desk(22, 169, "Small", "Right", 6, "Hyatt Hotel Sofia"),
        new Desk(23, 169, "Small", "Left", 6, "Hyatt Hotel Sofia"),
        new Desk(24, 159, "Large", "Right", 6, "Hyatt Hotel Sofia"),
        new Desk(25, 149, "Small", "Left", 6, "Hyatt Hotel Sofia"),
        new Desk(26, 169, "Large", "Center", 6, "Hyatt Hotel Sofia"),
        new Desk(27, 179, "Large", "Right", 6, "Hyatt Hotel Sofia"),
    ],

    selectedSpace: null,
    latestDeskId: 27,
    latestRoomId: 6,
});

export const getter = {};

export const mutations = {
    rentDesk(state, params) {
        const [id, email, weeks] = params;
        let desk = state.desks.find((x) => x._id === id);
        desk.rentedPeriod = weeks;
        desk.rentedBy = email;
        desk.isTaken = true;
        desk.nextAvailableDate = getDeskFreeDate(weeks);
    },
    freeDesk(state, deskId) {
        let desk = state.desks.find((x) => x._id === deskId);
        desk.rentedPeriod = null;
        desk.rentedBy = null;
        desk.isTaken = false;
        desk.nextAvailableDate = null;
    },

    selectDeskToRent(state, desk) {
        state.selectedDeskToRent = desk;
    },
    resetSelectedDesk(state) {
        state.selectDeskToRent = null;
    },
    addNewDesk(state, [roomId, deskSize, deskPosition, deskPrice]) {
        state.latestDeskId += 1;

        const desk = new Desk(
            state.latestDeskId,
            Number(deskPrice),
            deskSize,
            deskPosition,
            Number(roomId),
        );
        state.desks.push(desk);
    },
    addNewRoom(state, [roomLocation, officeName, size]) {
        state.latestDeskId++;
        state.latestRoomId++;
        let desk = new Desk(
            state.latestDeskId,
            200,
            "Large",
            "Left",
            state.latestRoomId,
            officeName,
        );
        state.desks.push(desk);
    },
};

export const actions = {};
