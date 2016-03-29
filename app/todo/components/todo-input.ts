import {Component} from 'angular2/core'
import {TodoService} from '../services/todo-service'
import {TodoModel} from '../services/todo-model'

@Component({
  selector: 'todo-input',
  template: `
    <div>
      <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoTitle">
      </form>
    </div>`
})

export class TodoInput {
  todoTitle: string

  constructor(public todoService: TodoService) {
  }

  onSubmit() {
    this.todoService.addTodo(new TodoModel(this.todoTitle))
    console.log(this.todoService.todos)
  }
}
