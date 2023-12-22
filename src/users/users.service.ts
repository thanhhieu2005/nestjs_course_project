import { Injectable } from "@nestjs/common";
import { UserInterface } from "./interfaces/create-user.interface";

@Injectable()
export class UsersService {

    private fakeUsers = [
        {
            username: "Hayden",
            email: 'hieunguyen.2321@gmail.com'
        }
    ];

    fetchUsers() {
        return this.fakeUsers;
    }

    createNewUser(userDetails: UserInterface) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number) {
        return {
            id: 1,
            username: "Hieu",
            email: "hieunguyen.2321@gmail.com"
        }
    }
}