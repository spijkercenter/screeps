export function roomInit() {
    Room.prototype.getSources = function () {
        return this.find(FIND_SOURCES);
    }

    Room.prototype.tick = function () {
        // Draw mining spots
        let sources: Source[] = this.find(FIND_SOURCES);
        for (let sourceName in sources) {
            let source = sources[sourceName];
            let pos = source.pos;

            let neighbors = pos.getFreeNeighbors(1);

            for (let idx in neighbors) {
                this.drawRect(neighbors[idx]);
            }
        }

        // Draw upgrade spots
        let controller = this.controller;
        if (controller != null) {
            let neighbors = controller.pos.getFreeNeighbors(2);
            for (let idx in neighbors) {
                this.drawRect(neighbors[idx]);
            }
        }

        // Draw drop off spots
        // TODO add Extension
        let spawn = this.find(FIND_MY_SPAWNS)[0];
        if (spawn != null) {
            let neighbors = spawn.pos.getFreeNeighbors(1);
            for (let idx in neighbors) {
                this.drawRect(neighbors[idx]);
            }
        }
    }

    const squareSize = 0.4;
    const beginMod = 0.5 - (1 - squareSize) / 2;

    Room.prototype.drawRect = function (pos: RoomPosition) {
        this.visual.rect(pos.x - beginMod, pos.y - beginMod, squareSize, squareSize);
    };
}
