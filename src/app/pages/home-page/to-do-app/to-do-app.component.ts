import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    const todoControl = this.form.get('todo');
    if (todoControl) {
      const data = {
        data: {
          todo: todoControl.value,
        },
      };
      this.sApi.createToDo(data).subscribe(
        (res) => {
          console.log(res);
          // when created was successful, added to the list:
          this.getTodos();
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  }

  public deleteTodo(id: number) {
    this.sApi.deleteToDo(id).subscribe(
      (res) => {
        console.log('res');
        this.getTodos();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public todos: any;

  public form = new FormGroup({
    todo: new FormControl('', [Validators.required]),
  });
}
