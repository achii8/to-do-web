import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import {DataService} from '../app/utils/data-service';
import {MyGuard} from '../app/guards/my-guard'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'to-dos', component: TodosComponent, canActivate:[MyGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataService],
})

export class AppRoutingModule {

 }
