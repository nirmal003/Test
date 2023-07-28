import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(body): Promise<any> {
    return await this.userRepository.save(body);
  }

  async updateUser(body, param): Promise<any> {
    console.log(body, param);

    return await this.userRepository.save(body);
  }

  async fetchAllUsers(): Promise<any> {
    return await this.userRepository.find();
  }

  async fetchByID(id): Promise<any> {
    return await this.userRepository.find({ where: { id: id } });
  }
  async deleteUser(id): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
