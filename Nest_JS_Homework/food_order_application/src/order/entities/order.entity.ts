
import { Order, Product } from "src/interfaces/interfaces";
import { Entity,Column,PrimaryColumn, OneToMany, } from "typeorm";
import { ProductsEntity } from "src/products/products/entities/product.entity";

@Entity('orders')
export class OrderEntity implements Order {
    @PrimaryColumn()
    id: string;

    @Column()
    orderDate: Date;

    @OneToMany(() => ProductsEntity, (product) => product.order )
    productsOrdered: ProductsEntity[];
}
