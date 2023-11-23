import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createToDo(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post('http://localhost:1337/api/todos', data, { headers })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response.data;
        })
      );
  }

  readToDo() {
    return this.http.get('http://localhost:1337/api/todos').pipe(
      map((response: any) => {
        // console.log(response);
        return response.data;
      })
    );
  }

  updateToDo() {}

  deleteToDo() {}

  public todos: any[] = [];
  public error: any;
}
