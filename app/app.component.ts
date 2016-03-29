import {Component} from 'angular2/core'
import {TodoInput} from './todo/components/todo-input'
import {TodoList} from './todo/components/todo-list'
import {StatusSelector} from './todo/components/status-selector'
import {SearchBox} from "./search/components/search-box"

@Component({
    selector: 'app',
    directives: [TodoInput, TodoList, StatusSelector, SearchBox],
    template: `
    <div>
      <search-box (update)="term = $event"></search-box>
      <todo-input></todo-input>
      <status-selector (select)="status = $event"></status-selector>
      <todo-list
      [status]="status"
      [term]="term"
      ></todo-list>
    </div>`
})
export class AppComponent { }
