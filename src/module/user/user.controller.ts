import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDTO } from 'src/model/DTO/user_dto';
import { UserService } from 'src/model/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  async createUser(@Body() userDTO: UserDTO): Promise<any> {
    console.log('before....>>>>');
    let user = await this.userService.createUser(userDTO);
    console.log('hi', user);
    return user;
  }

  @Get('')
  async fetchAllUsers(): Promise<any> {
    console.log('get called');
    return await this.userService.fetchAllUsers();
  }

  @Get('/:id')
  async fetcuserById(@Param() param: any): Promise<any> {
    return await this.userService.fetchByID(param.id);
  }
  @Delete('/:id')
  async deleteUser(@Param() param: any): Promise<any> {
    return await this.userService.deleteUser(param.id);
  }

  @Patch('/:id')
  async updateUser(
    @Body() userDTO: UserDTO,
    @Param() param: any,
  ): Promise<any> {
    console.log('before>>>>');
    let user = await this.userService.updateUser(userDTO, param);
    console.log('hi', user);
    return user;
  }
}
