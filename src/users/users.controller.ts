import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BlogDto } from 'src/dto/blog.dto';
import { userDto } from 'src/dto/usersDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(200)
  async getAll() {
    return this.userService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  async addUser(@Body() user: userDto) {
    return this.userService.addUsers(user);
  }

  @Get('blog')
  @HttpCode(200)
  async getBlog() {
    return this.userService.getBlog();
  }

  @Post('add-blog')
  @HttpCode(201)
  async addBlog(@Body() blog: BlogDto) {
    return this.userService.addBlog(blog);
  }
}
