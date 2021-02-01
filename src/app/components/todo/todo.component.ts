import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoResponse } from 'src/app/models/to-do-response-model';
import { DataService } from 'src/app/utils/data-service';
import { ToDoService } from '../../services/to-do.service';

export const ToDoTypeValues = [
{key: "TO_DO", value: "დაწყება"},
{key: "IN_PROGRESS", value: "პროცესშია..."},
{key: "DONE", value: "მზადაა!"}
]

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  @Input()
  public toDo!: ToDoResponse;
  public ToDoTypeValues = ToDoTypeValues;
  public value = Observable;
  public name= "";
  deleteToDo(id:string){
    this.toDoService.delete(id).subscribe(resp=>{
      if(resp){
        this.getData()
      }
    },(e)=>{console.log(e)});
  }
  getColor():String{
    if(this.toDo.type=="TO_DO"){
      return "to-do to_do"
    }
    else if(this.toDo.type=="IN_PROGRESS"){
      return "to-do in_progress"
    }
    else {
      return "to-do done"
    }
  }
  isDisabled(value:string):boolean{
    const toDos= this.ToDoTypeValues.map((obj:any)=>{
      return obj.key;
    })
    const indexOfCurrent = toDos.indexOf(value);
    const indexOfEach =toDos.indexOf(this.toDo.type);
    if(indexOfCurrent-indexOfEach==1 || indexOfCurrent==indexOfEach){
      return false;
    }
    return true;
  }
  updateToDo(){
   this.toDoService.update(this.toDo._id, this.toDo).subscribe(resp=>{
      if(resp){
        this.getData()
      }
    },(e)=>{console.log(e)});
  }
  getData() {
    this.toDoService.getList(this.name).subscribe(resp=>{
      this.setList(resp.data);
    }); 
   } 
  setList(list: ToDoResponse[]):void{   
    this.dataService.changeList(list);
  }
  setUsername(userName: string):void{
    this.toDo.userName = userName;
  }
  constructor(private toDoService: ToDoService, private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.currentName.subscribe(name=>this.name=name);
  }


}
