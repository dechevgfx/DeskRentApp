class Desk {
    constructor(id, price, size, position, roomId, roomName) {
        this._id = id;
        this.price = price;
        this.size = size;
        this.position = position;
        this.roomId = roomId;
        this.nextAvailableDate = null;
        this.isTaken = false;
        this.rentedPeriod = null;
        this.rentedBy = null;
        this.roomName = roomName;
    }

    toJSON() {
        return { ...this };
    }
}

export default Desk;
