import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/utils/data-service';
import {ToDo} from '../../models/to-do-model';
import {ToDoResponse} from '../../models/to-do-response-model';
import {ToDoService} from "../../services/to-do.service";
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  public toDo: ToDo = {
    name: '',
    description: '',
    time: -1,
    type: 'TO_DO',
    userName: '',
    creatorUsername: ''
  }
  public name="";
  changeName(name:string){
    this.toDo.name = name;
  }
  changeDescription(description:string){
    this.toDo.description = description;
  }
  changeUserName(userName:string){
    this.toDo.userName = userName;
  }
  changeTime(time:number){   
    this.toDo.time = time;
  }
  constructor( private toDoService: ToDoService, 
    private dataService: DataService) {
      this.dataService.currentName.subscribe(name=>this.name=name)
  }
  createToDo() {
    this.toDo.creatorUsername = this.name;
    this.toDoService.create(this.toDo).subscribe(resp=>{
      if(resp){
        this.getData();
      }
    },err=>{console.log(err)})
   }
  ngOnInit(): void {
    this.dataService.currentName.subscribe(name=>this.name=name);
  }
  getData() {
    this.toDoService.getList(this.name).subscribe(resp=>{
      this.setList(resp.data);
    }); 
   } 
   setList(list: ToDoResponse[]):void{   
    this.dataService.changeList(list);
  }

}
