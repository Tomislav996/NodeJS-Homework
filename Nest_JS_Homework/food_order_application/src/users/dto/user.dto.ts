import { Role } from "src/interfaces/role.enum";

export class UserDtoCreate {
    username: string;

    password: string;

    role: Role
}