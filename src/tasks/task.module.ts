import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

// moduleであることを定義するデコレータ
@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [],
    controllers: [],
})

export class TaskModule {}