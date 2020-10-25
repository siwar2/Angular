import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
editForm=false ;
showForm=false ;
 myTask: Task={
  label : " ",
  completed:false,
   dd: "" ,
   df: "",
  

 }
 tasks:Task[]=[];
  constructor(private ts:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
getTasks(){
  this.ts.getAll().subscribe(tasks => this.tasks = tasks)
}
deleteTask(id){
  this.ts.delete(id).subscribe(()=>{
    this.tasks=this.tasks.filter(tasks=>tasks.id!= id)
  })
}

saveTask(){
 this.ts.add(this.myTask).subscribe((task) => {
   this.tasks=[task , ...this.tasks];
    this.reset();
    this.showForm=false ;
 }) 
  }
  reset(){
    this.myTask={
    label : " ",
    completed:false,
     dd: "" ,
     df: "",
  
    }
  }
  togglecompleted(task){
    this.ts.completed(task.id,task.completed).subscribe(()=>{
      task.completed=!task.completed 
    })
  }

  editTask(task){
    this.myTask=task ;
    this.editForm=true ;
  }
  updateTask(){
    this.ts.update(this.myTask).subscribe(task=>{
      this.reset();
      this.editForm=false ;
    })
  }


}