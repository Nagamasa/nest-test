import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable() // @Injectableデコレータを付与すると、DIが可能になる
export class TaskService {
    constructor(
        @InjectRepository(Task) // @InjectRepository()デコレータを使用して、RepositoryをServiceに注入
        private readonly taskReository: Repository<Task>
    ) {}
    
    create(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskReository.save(createTaskDto);
    }

    findAll(): Promise<Task[]> {
        return this.taskReository.find();
    }

    findOne(id: string): Promise<Task> {
        return this.taskReository.findOne({ where: { id: Number(id) } });
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskReository.findOne({
            where: { id: Number(id) },
        });
        task.name = updateTaskDto.name;
        task.isCompleted = updateTaskDto.isCompleted;

        return this.taskReository.save(task);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.taskReository.delete(id);
    }
}