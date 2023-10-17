import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { userDTO } from 'src/dto/user/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/services/user/user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() createUSer: userDTO): Promise<any> {
    return await this.userService.createUser(createUSer);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return this.userService.deleteUser(+id);
  }
}
