import { Role } from "./role.enum";

export interface Product {
    id: string,
    productName: string,
    productPrice: number
}

export interface Order {
    id: string,
    orderDate: Date,
    productsOrdered: Product[]
}

export interface UserToSave {
    username: string;
    password: string;
    role: Role
}


