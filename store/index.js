import User from "../models/User";

export const state = () => ({
    users: [
        new User("Gosho", "gosho", "gosho"),
        new User("Admin", "admin", "admin", "admin"),
        new User("Manager", "manager", "manager", "RoomManager", [1]),
    ],
    currentUser: null,
    error: "",
});

export const getter = {
    getCurrentUser(state) {
        return state.currentUser;
    },
};

export const mutations = {
    login(state, params) {
        const user = state.users.find((x) => x.email === params[0]);

        if (user && user.password === params[1]) {
            state.currentUser = user;
        } else if (!user || !user.password !== params[1]) {
            state.error = "Wrong email or password. Please try again!";
        }
    },

    register(state, params) {
        const [fullName, email, password] = params;
        let mailArray = [];
        for (let user of state.users) {
            mailArray.push(user.email);
        }

        if (fullName && email && password && !mailArray.includes(email)) {
            const newUser = new User(fullName, email, password);
            state.currentUser = newUser;
            state.users.push(newUser);
        } else if (mailArray.includes(email)) {
            state.error =
                "Email is already registered. Please try again with different email.";
        } else {
            state.error = "Please fill out all fields and try again.";
        }
    },

    logout(state) {
        state.currentUser = null;
    },

    addRentedDesk(state, deskId) {
        state.currentUser.rentedDesks.push(deskId);
    },
    removeRentedDesk(state, [deskId, email]) {
        let user = state.users.find((x) => x.email === email);
        user.rentedDesks = user.rentedDesks.filter((x) => x !== deskId);
    },
    promoteToManager(state, email) {
        let user = state.users.find((current) => current.email === email);
        user.role = "RoomManager";
    },
    demoteManager(state, email) {
        let user = state.users.find((current) => current.email === email);
        user.role = "client";
    },
    banUser(state, email) {
        state.users = state.users.filter((current) => current.email !== email);
    },
    addManagedRoom(state, props) {
        const [roomId, email] = props;

        let user = state.users.find((current) => current.email === email);
        user.roomsManaged.push(roomId);
    },
    removeManagedRoom(state, props) {
        const [roomId, email] = props;
        let user = state.users.find((current) => current.email === email);
        user.roomsManaged = [];
    },
};

export const actions = {
    async fetchCounter(state) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    },
};
