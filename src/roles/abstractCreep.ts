export abstract class AbstractCreep extends Creep {

    private static constructors: { [index: string]: Function; } = {};

    constructor(name: string) {
        super(Game.creeps[name].id);
    }

    abstract tick(): void;

    protected static addConstuctor(role: string, constructor: Function): void {
        this.constructors[role] = constructor;
    }

    static get(name: string): AbstractCreep | null {
        console.log(name);
        let roleName = Game.creeps[name].memory['role'];
        if (roleName == null)
            roleName = 'common';

        if (roleName in this.constructors) {
            return this.constructors[roleName].call(null, name);
        }
        console.log(`No Creep found with name ${name}`);
        return null;
    }
}
