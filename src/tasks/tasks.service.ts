import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import * as uuid from 'uuid';
import { createTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    getAllTasks(){
        return this.tasks
    }
    getTaskById(id:string){
        return this.tasks.find( task => task.id == id);

    }
    createTask(createTask:createTaskDto):Task{
        const { title , description } = createTask;
        const task:Task={
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task)   
        return task;
    }
}
