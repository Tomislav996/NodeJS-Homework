import { IsNotEmpty, IsNumber, MaxLength, MinLength, IsString} from "class-validator";

export class ProductDtoCreate {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    productName: string;
    @IsNotEmpty()
    @IsNumber()
    productPrice: number;

}

export class ProductDtoUpdate {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    productName: string;
    @IsNotEmpty()
    @IsNumber()
    productPrice: number;

}