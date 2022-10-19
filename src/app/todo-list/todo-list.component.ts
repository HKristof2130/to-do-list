import { Component, Input, OnInit } from '@angular/core';
import { List } from '../todo-list-creator/todo-list-creator.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() lists : List[] = [];
  todoList : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTodoItem(item : string, listIndex : number){
    this.lists[listIndex].todos.push(item);
  }

  deleteTodoItem(listIndex : number, todoIndex : number){
    this.lists[listIndex].todos.splice(todoIndex,1);
  }

}
