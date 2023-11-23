import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css'],
})
export class ToDoAppComponent implements OnInit {
  constructor(private sApi: ApiService) {}

  ngOnInit(): void {
    this.sApi.readToDo().subscribe(
      (data) => {
        this.todos = data;
        console.log(data[0]);
        // console.log(typeof this.todos.attributes.todo);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  public getTodos() {
    this.sApi.readToDo().subscribe(
      (data) => {
        this.todos = data;
        console.log(data[0]);
        // console.log(typeof this.todos.attributes.todo);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  public createTodos() {
    const data = {
      data: {
        todo: 'harmadik',
      },
    };
    this.sApi.createToDo(data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  public todos: any;
}
