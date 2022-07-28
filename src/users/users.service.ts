import { Injectable } from '@nestjs/common';
import { User } from 'src/types/user';

@Injectable()
export class UsersService{
    private readonly users: User[] = [];
    create(user : User){
        this.users.push(user) 
    }
    findAll():User[] {
        return this.users
    }
}