import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todo = '';
  todos: any[] = [];

  addTodo() {
    if (this.todo != '') {
      this.todos = [...this.todos, this.todo];
      this.todos + this.todo;
      this.todo = "";
    }
  }

  eliminar(index: number) {
    this.todos.splice(index, 1);
  }
}