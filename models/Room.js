
class Room {
    constructor(city, id, size, name, deskIds, manager) {
        this.city = city;
        this._id = id;
        this.size = size;
        this.name = name;
        this.deskIds = deskIds.length > 0 ? deskIds : [];
        this.rentedDesksCount = 0;
        this.isTaken = false;
        this.manager = manager ? manager : 'admin';
    }

    get deskCapacity() {
        return this.deskIds.length
    }

    toJSON() {
        return {...this}
    }
}

export default Room;