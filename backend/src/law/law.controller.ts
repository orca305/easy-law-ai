import { Body, Controller, Get, Post } from '@nestjs/common';
import { LawService } from './law.service.js';
import { CreateLawDto } from './dto/create-law.dto.js';

@Controller('laws')
export class LawController {
  constructor(private readonly lawService: LawService) {}

  @Get()
  findAll() {
    return this.lawService.findAll();
  }

  @Post()
  create(@Body() createLawDto: CreateLawDto) {
    return this.lawService.create(createLawDto);
  }
}
