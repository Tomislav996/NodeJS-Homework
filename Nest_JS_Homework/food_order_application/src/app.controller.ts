import { Controller, Get, UseGuards, Post, Request, Body} from '@nestjs/common';

import { AppService } from './app.service';
import { UserDtoCreate } from './users/dto/user.dto';

import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './common/auth/local-auth/local-auth.guard';

import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {

    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() body: UserDtoCreate){
    const id = await this.authService.register(body);

    return `User with id: ${id} Created`;
  }

}


