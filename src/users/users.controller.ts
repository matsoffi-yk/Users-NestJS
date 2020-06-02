import { Controller, Get, Res, HttpStatus, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('/getUsers')
    async getUsers(@Res() res) {
        const users = await this.usersService.getUsers()
        return res.status(HttpStatus.OK).json(users)
    }

    @Post('/addUser')
    async addUser(
        @Body() createUser: Users,
        @Res() res
    ) {
        const users = await this.usersService.addUser(createUser)
        return res.status(HttpStatus.OK).json(users)
    }

    @Patch('/updateUser/:id')
    async updateUser(
        @Param('id') id: number,
        @Body() updateUser: Users,
        @Res() res
    ) {
        const update = await this.usersService.updateUser(+id, updateUser)
        return res.status(HttpStatus.OK).json(update)
    }

    @Delete('/deleteUser/:id')
    async deleteUser(
        @Param('id') id: number,
        @Res() res
    ) {
        const deleteUser = await this.usersService.deleteUser(+id)
        return res.status(HttpStatus.OK).json(deleteUser)
    }
}
