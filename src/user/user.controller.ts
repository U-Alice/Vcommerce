import { Controller, Get } from '@nestjs/common';
import { User } from 'src/types/user';
import { UsersService } from 'src/users/users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) {

    }
    @Get()
    async findAll(): Promise<User[]> {
        let user: User = {
            name: "Alice", password: "asdf", address: {
                addr1: "string",
                addr2: "string",
                city: "string",
                state: "string",    
                country: "string",
                zip: 123
            }, seller: true
        }
        this.userService.create(user)
        return this.userService.findAll()
    }
}
