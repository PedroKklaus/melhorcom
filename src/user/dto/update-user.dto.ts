import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'pedro santos', description: 'Updated name of the user', required: false })
  name?: string;

  @ApiProperty({ example: 'pedrosantos@example.com', description: 'Updated email of the user', required: false })
  email?: string;
}
