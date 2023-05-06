import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from 'src/common/auth/role-guard/roles-guard';

@Module({
  imports: [UsersModule, JwtModule.register({secret: 'some_secret',signOptions: {expiresIn: '60s'}})],
  providers: [AuthService,LocalStrategy, JwtStrategy,RolesGuard],
  exports: [AuthService]
})
export class AuthModule {}
