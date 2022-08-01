import {v4 as id} from 'uuid';

export default class User {
    constructor(name, email, password, role, roomsManaged) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role ? role : 'client';
        this.roomsManaged = roomsManaged ? roomsManaged : [];
        this.rentedDesks = [];
        this._id = id();
    }

    toJSON() {
        return {...this}
    }
}

