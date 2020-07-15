import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {TasksService} from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { createTaskDto } from './dto/create-task-dto';
@Controller('tasks')
export class TasksController {
constructor( private tasksService:TasksService ){      };
    @Get()
    getAllTasks():Task[]{
       return this.tasksService.getAllTasks()
    }
    @Post()
    createTask(@Body() createTask:createTaskDto ) :Task{
        return this.tasksService.createTask(createTask);
    }
    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
        return this.tasksService.getTaskById(id);
    }
}
