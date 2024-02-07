import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersFilterableFields } from './users_filterable_fields';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(filters: UsersFilterableFields): Promise<User[]> {
    const fields = Object.keys(filters);

    let built_where = {};

    fields.forEach(field => {
      if (filters[field] !== undefined) {
        built_where = { ...built_where, [field]: ILike(`%${filters[field]}%`) };
      }
    });

    return this.usersRepository.find({
      where: built_where, 
    });
  }
}
