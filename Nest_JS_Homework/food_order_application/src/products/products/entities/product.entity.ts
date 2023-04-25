import { Product } from 'src/interfaces/interfaces';
import{Entity, Column, PrimaryColumn} from 'typeorm';

@Entity(`products`)
 export class ProductsEntity implements Product {

    @PrimaryColumn()
    id: string;

    @Column()
    productName: string;

    @Column()
    productPrice: number;

}