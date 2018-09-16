export function roomPositionInit() {
    RoomPosition.prototype.getNeighbors = function (radius: number, predicate?: (pos: RoomPosition) => boolean) {

        let result: RoomPosition[] = [];
        for (let x = this.x - radius; x <= this.x + radius; ++x) {
            for (let y = this.y - radius; y <= this.y + radius; ++y) {
                let roomPosition = new RoomPosition(x, y, this.roomName);
                if (predicate == null || predicate(roomPosition))
                    result.push(new RoomPosition(x, y, this.roomName));
            }
        }
        return result;
    }

    RoomPosition.prototype.getFreeNeighbors = function (radius: number) {
        return this.getNeighbors(radius, pos => pos.isFree());
    }

    RoomPosition.prototype.isFree = function () {
        let lars = this.look();
        for (let idx in lars)
            if (lars[idx].terrain == 'plain')
                return true;
        return false;
    }
}
