import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrderModule } from './order/order.module';
import { ProductsModule } from './products/products/products.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [OrderModule,UsersModule, ProductsModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: '666arsenal',
    database: 'food_app_db',
    autoLoadEntities: true,
    synchronize: true,
    }), AuthModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


