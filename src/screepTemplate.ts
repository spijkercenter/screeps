import { Role } from "roles/role";

export class ScreepTemplate {
    role: Role;
    body: BodyPartConstant[];

    constructor(role: Role, body: BodyPartConstant[]) {
        this.role = role;
        this.body = body;
    }
}
