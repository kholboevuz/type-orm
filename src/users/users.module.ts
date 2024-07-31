import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { User } from 'src/entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Blog])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
