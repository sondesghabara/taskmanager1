import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Taskservice } from './taskservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  
today = new Date();

price = 1234.56;
percentage = 0.259;

i : number=0;

tasks: any[] = [];

constructor(private taskService: Taskservice) {}

ngOnInit() {
this.tasks = this.taskService.getTasks();
}

  addNewTask(){
    this.taskService.addTask("new task")
  }
  removeTask(idx:number){
    this.taskService.deleteTask(idx)
  }
  }

