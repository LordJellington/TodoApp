import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces';
import { TodoitemsService } from '../todoitems.service';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  readonly blankNewItem: TodoItem = {
    name: "",
    isComplete: false
  }

  newItem: TodoItem = {
    name: this.blankNewItem.name,
    isComplete: this.blankNewItem.isComplete
  };

  constructor(
    public todoItemsService: TodoitemsService
  ) {
    
  }

  addNewItem() {

    this.todoItemsService.addNewItem(this.newItem);
    this.newItem = {
      name: this.blankNewItem.name,
      isComplete: this.blankNewItem.isComplete
    };

  }

  itemUpdated(item: TodoItem) {
    this.todoItemsService.updateItem(item);
  }

  itemDeleted(item: TodoItem) {
    this.todoItemsService.deleteItem(item);
  }

  refreshTodoItems() {
    this.todoItemsService.getTodoItems();
  }

  ngOnInit(): void {

  }

}
