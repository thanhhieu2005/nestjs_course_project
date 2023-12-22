import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { ValidateCreateUserPipe } from "./pipes/validate-create-user.pipe";
import { AuthGuard } from "./guards/auth.guard";

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    // @UseGuards(AuthGuard)  // can be assign guard at each function in controller
    getUsers() {
        return this.usersService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData);
        this.usersService.createNewUser(userData);
        return userData;
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.fetchUserById(id);
        if (!user)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

        return user;
    }

}