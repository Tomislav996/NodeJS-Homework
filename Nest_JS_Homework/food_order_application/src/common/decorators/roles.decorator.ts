import { SetMetadata } from "@nestjs/common";
import { Role } from "src/interfaces/role.enum";


export const Roles  = (...roles: Role[]) => SetMetadata("roles", roles);