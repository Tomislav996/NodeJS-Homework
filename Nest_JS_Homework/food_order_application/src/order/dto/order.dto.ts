import { Product } from "src/interfaces/interfaces";
import { ArrayNotEmpty, IsArray } from "class-validator";


export class OrderDtoCreate {
   // @IsArray()
  //  @ArrayNotEmpty()
    productsOrdered: Product[]
}

export class OrderDtoUpdate {
   // @IsArray() 
   // @ArrayNotEmpty()
    productsOrdered: Product[]
}