import { LOCATION_INITIALIZED } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-list-creator',
  templateUrl: './todo-list-creator.component.html',
  styleUrls: ['./todo-list-creator.component.scss']
})
export class TodoListCreatorComponent implements OnInit {

  activeLists : List[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addList(listName : string){
    const listItem : List  = {
      name : listName,
      todos : []
    }
    this.activeLists.push(listItem);
  }
}

export type List = {
  name : string,
  todos : string[]
};

