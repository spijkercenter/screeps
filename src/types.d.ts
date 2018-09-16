// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  role: string;
  state: string;
  destination: RoomObject;
}

interface Memory {
  uuid: number;
  log: any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}

interface Room {
  getSources(): Source[];
  tick(): void;
  drawRect(pos: RoomPosition): void;
}

interface RoomPosition {
  getNeighbors(radius: number, predicate?: (pos: RoomPosition) => boolean): RoomPosition[];
  getFreeNeighbors(radius: number): RoomPosition[];
  isFree(): boolean;
}
