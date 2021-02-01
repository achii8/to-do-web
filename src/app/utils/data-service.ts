import {Injectable} from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ToDoResponse } from '../models/to-do-response-model';

@Injectable()
export class DataService{
    private nameSource = new BehaviorSubject<string>('');
    private list = new BehaviorSubject<ToDoResponse[]>([]);
    currentList = this.list.asObservable();
    currentName = this.nameSource.asObservable();
    changeName(name: string){
        this.nameSource.next(name);
    }
    changeList(list: ToDoResponse[]){
        this.list.next(list);
    }
    constructor(){}
}