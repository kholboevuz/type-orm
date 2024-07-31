import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogDto } from 'src/dto/blog.dto';
import { userDto } from 'src/dto/usersDto';
import { Blog } from 'src/entity/blog.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getBlog() {
    return this.blogRepository.find();
  }

  addUsers(user: userDto) {
    return this.usersRepository.save(user);
  }

  async addBlog(blog: BlogDto) {
    try {
      return this.blogRepository.save({
        title: blog.title,
        description: blog.description,
      });
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
