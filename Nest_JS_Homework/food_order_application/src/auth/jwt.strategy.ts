import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {ExtractJwt ,Strategy } from 'passport-jwt';
import { Role } from 'src/interfaces/role.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

            ignoreExpiration: false,

            secretOrKey: 'some_secret',
        });
    }

    async validate(payload: { sub: number; username: string; role: Role }) {
        return {
            userId: payload.sub,
            username: payload.username,
            role: payload.role
        };
    }
}