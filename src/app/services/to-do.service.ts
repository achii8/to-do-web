import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { API_ROUTES } from '../utils/constanst';
import { API_ROUTES } from '../utils/api-routes';
// import { Client } from 'app/models/client';
import { ToDo } from '../models/to-do-model'
import { Response } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoService  {
  loading = true;

  constructor(
    private http: HttpClient,
  ) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  });

  getList(name: string): Observable<Response> {
    return this.http.get<Response>(
        API_ROUTES.routes.to_do.list.replace(':creatorUsername', String(name)),
      { headers: this.headers }
    );
  }
  create(toDo: ToDo): Observable<Response> {
    return this.http.post<Response>(
        API_ROUTES.routes.to_do.create,
      {
        name: toDo.name,
        description: toDo.description,
        time: toDo.time,
        userName: toDo.userName,
        creatorUsername: toDo.creatorUsername,
      },
      { headers: this.headers }
    );
  }

  delete(id: string): Observable<Response> {
    return this.http.delete<Response>(
        API_ROUTES.routes.to_do.delete.replace(':id', String(id)),
      { headers: this.headers }
    );
  }
  update(id: string,toDo: ToDo): Observable<Response> {
    return this.http.patch<Response>(
        API_ROUTES.routes.to_do.update.replace(':id', String(id)),
        {
          name: toDo.name,
          description: toDo.description,
          type: toDo.type,
          time: toDo.time,
          userName: toDo.userName,
        },
      { headers: this.headers }
    );
  }

  getOne(id: number): Observable<Response> {
    return this.http.get<Response>(
        API_ROUTES.routes.to_do.get.replace(':id', String(id)),
      { headers: this.headers }
    );
  }

 

}
