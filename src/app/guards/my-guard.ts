import {CanActivate, Router} from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataService} from "../utils/data-service";
@Injectable()
export class MyGuard implements CanActivate {
  public name="";
  constructor(private dataService:DataService,private router: Router){
      this.dataService.currentName.subscribe(name=>this.name=name)
  }
  canActivate() {
    if(!this.name){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}