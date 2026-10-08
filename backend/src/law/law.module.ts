import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { LawController } from './law.controller.js';
import { LawService } from './law.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [LawController],
  providers: [LawService],
})
export class LawModule {}
