import { Injectable } from '@nestjs/common';
import { UserDtoCreate } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { UserToSave } from 'src/interfaces/interfaces';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

    async findOne(username: string){
        const userFound = this.userRepository.findOne({
            where: {username: username}
        })
        return userFound;
    }

    async save(userToSave: UserToSave) {
        const userEntityInstance = this.userRepository.create(userToSave);

        const userSaved = await this.userRepository.save(userEntityInstance);

        return userSaved.id;
    }
}
