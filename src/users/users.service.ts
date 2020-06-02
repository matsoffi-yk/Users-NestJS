import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    users: Users[] = [
        {
            "id": 1,
            "name": "name",
            "surname": "surname",
            "nickname": "nickname",
            "age": 0,
            "phoneNumber": "0123456789",
            "line": "line",
            "email": "email@email.com",
            "address": {
                "houseNo": "1",
                "village": "2",
                "subDistrict": "subDistrict",
                "district": "district",
                "province": "province",
                "postalCode": "12345",
            }
        },
    ]

    async getUsers(): Promise<any> {
        try {
            if (!this.users) {
                throw new Error('Not found.');
            }
            else {
                // console.log(`${this.users[0].address}`)
                return this.users;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async addUser(createUser): Promise<any> {
        try {
            if (!this.users) {
                throw new Error('Not found.');
            }
            else {
                createUser.id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
                this.users.push(createUser)
                // console.log(createUser.address.houseNo)
                return this.users[createUser.id - 1];
            }
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            });
        }
    }

    async updateUser(id, updateUser): Promise<any> {
        try {
            if (!this.users) {
                throw new Error('Not found.');
            }
            else {
                if (this.users.find(user => user.id === id)) {
                    updateUser.id = this.users[id - 1].id
                    this.users[id - 1] = updateUser;
                    return this.users[id - 1];
                }
                else {
                    return `Not found id: ${id}`
                }

            }
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            });
        }
    }

    async deleteUser(id): Promise<any> {
        try {
            if (!this.users) {
                throw new Error('Not found.');
            }
            else {
                if (this.users.find(data => data.id === id)) {
                    this.users = this.users.filter(data => data.id !== id)
                    return `id: ${id} Deleted`;
                }
                else {
                    return `Not found id: ${id}`
                }

            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }
}
