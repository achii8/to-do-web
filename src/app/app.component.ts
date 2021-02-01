import { Component, OnInit } from '@angular/core';
import { ToDo } from "./models/to-do-model";
import {ToDoService} from "../app/services/to-do.service";
import { Response } from './models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { 
  }
  ngOnInit(): void {
  }
}
