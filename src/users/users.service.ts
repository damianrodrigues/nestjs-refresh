import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'Alice',
      email: 'alice@fake.com',
      role: 'ADMIN',
    },
    {
      id: '2',
      name: 'Bob',
      email: 'bob@fake.com',
      role: 'ENGINEER',
    },
    {
      id: '3',
      name: 'Charlie',
      email: 'charlie@fake.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const foundUsers = this.users.filter((user) => user.role === role);
      if (foundUsers.length === 0) {
        throw new NotFoundException(`No users found with role ${role}`);
      }
    }
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  create(user: CreateUserDTO) {
    this.users.push({ id: String(this.users.length + 1), ...user });
    return user;
  }

  update(id: string, userUpdate: UpdateUserDTO) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: string) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
