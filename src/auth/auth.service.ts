import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../items/dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, status } = createUserDto;

    return await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        status,
      },
    });
  }
}
