import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  
  private tasks = [
     
{ title: 'Learn Angular', done: false },
{ title: 'Build ToDoList App', done: false },
{ title: 'Celebrate!', done: true },
{ title: 'test service', done: true },
];

 getTasks() {
return this.tasks;
}
addTask(title: string) {
this.tasks.push({ title, done: false });
}
deleteTask(idx:number){
  this.tasks.splice(idx,1)
}
}
