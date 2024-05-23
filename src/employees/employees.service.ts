import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return await this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return await this.databaseService.employee.findMany({
      where: { role },
    });
  }

  async findOne(id: string) {
    return await this.databaseService.employee.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return await this.databaseService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.employee.delete({
      where: { id },
    });
  }
}
