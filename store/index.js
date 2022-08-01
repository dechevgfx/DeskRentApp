import User from "../models/User";
export const state = () => ({
    users: [
        new User("Gosho", "gosho", "gosho"),
        new User("Admin", "admin", "admin", "admin"),
        new User("Manager", "manager", "manager", "Manager", [1]),
    ],
    currentUser: null,
});

export const getter = {
};

export const mutations = {
}

export const actions = {
    async fetchCounter(state) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    },
};