import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/databases/prisma-module/prisma.service';
import { generateHash } from 'src/utils/crypto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await generateHash(createUserDto.password),
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password: updateUserDto.password,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
