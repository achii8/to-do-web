import { Component, OnInit } from '@angular/core';
import { DataService } from '../../utils/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "";
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentName.subscribe(name => this.name = name)
  }
  setName(name: string):void{   
    this.dataService.changeName(name)
  }
  
}
