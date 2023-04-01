import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from 'src/db-module/prisma.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [ScheduleModule.forRoot(), PrismaModule],
  providers: [TasksService],
})
export class TasksModule {}
