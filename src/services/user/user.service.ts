import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { userDTO } from 'src/dto/user/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find({
      where: {
        actived: true,
      },
    });
  }

  async createUser(user: userDTO): Promise<any> {
    const verifyEmail = await this.usersRepository.findOne({
      where: {
        email: user.email,
      },
    });

    if (verifyEmail) {
      throw new HttpException('E-mail already registered!', HttpStatus.FOUND);
    }

    const createUser = this.usersRepository.create({
      name: user.name,
      email: user.email,
      actived: true,
      password: user.password,
      create_at: new Date(),
    });

    return this.usersRepository.save(createUser);
  }

  async deleteUser(id: number): Promise<any> {
    const verifyId = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!verifyId) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    verifyId.updated_at = new Date();
    verifyId.actived = false;

    return this.usersRepository.save(verifyId);
  }
}
