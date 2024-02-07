import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersFilterableFields } from './users_filterable_fields';
import { JSONResponseBuilder } from 'src/commons/json_response/json_response.builder';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(
    @Query() filters: UsersFilterableFields
  ) {
    const users = await this.usersService.findAll(filters);

    return new JSONResponseBuilder()
      .setMessage('Users retrieved successfully')
      .setData(users)
      .build();
  }
}
