import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateLawDto } from './dto/create-law.dto.js';

@Injectable()
export class LawService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.law.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  create(createLawDto: CreateLawDto) {
    return this.prisma.law.create({
      data: {
        lawId: createLawDto.lawId,
        lawName: createLawDto.lawName,
      },
    });
  }
}
