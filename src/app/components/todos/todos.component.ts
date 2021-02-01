import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import {ToDoResponse} from '../../models/to-do-response-model';
import { DataService } from '../../utils/data-service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public name = "";
  public todos : ToDoResponse[] =[];

  constructor(private dataService: DataService,
    private toDoService: ToDoService
  ) {
    this.getData();
  }

  getData() {
    this.toDoService.getList(this.name).subscribe(resp=>{
      this.setList(resp.data);
    }); 
   }
  ngOnInit(): void {
    this.dataService.currentList.subscribe(list => this.todos = list)
    this.dataService.currentName.subscribe(name=>this.name=name)
    this.getData();
  } 
  setList(list: ToDoResponse[]):void{   
    this.dataService.changeList(list);
  }

}
