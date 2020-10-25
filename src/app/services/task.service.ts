import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url="http://localhost:3000/tasks"
  constructor( private http:HttpClient) { }

  getAll(){
   return this.http.get<Task[]>(this.url) ;
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`) ;
  }

  add(task){
   return this.http.post<Task[]>(this.url ,task) ;
  }
  completed(id , completed){
   return this.http.patch(`${this.url}/${id}`,{completed:!completed}) ;

  }
  update(task){
    return this.http.put(`${this.url}/${task.id}`,task) ;
  }
 

}

