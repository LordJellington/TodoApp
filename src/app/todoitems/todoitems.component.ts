import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces';
import { TodoitemsService } from '../todoitems.service';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  loading: boolean = false;

  todoItems: TodoItem[];

  readonly blankNewItem: TodoItem = {
    name: "",
    isComplete: false
  }

  newItem: TodoItem = {
    name: this.blankNewItem.name,
    isComplete: this.blankNewItem.isComplete
  };

  constructor(
    private todoItemsService: TodoitemsService
  ) {
    this.refreshTodoItems();
  }

  addNewItem() {

    this.loading = true;
    this.todoItemsService.addNewItem(this.newItem)
      .then(() => {
        this.newItem = {
          name: this.blankNewItem.name,
          isComplete: this.blankNewItem.isComplete
        };
        this.refreshTodoItems();
      })
      .catch(error => {
        this.loading = false;
      });

  }

  itemUpdated(item: TodoItem) {
    
    this.loading = true;
    this.todoItemsService.updateItem(item)
      .then(() => {
        this.refreshTodoItems();
      })
      .catch(error => {
        this.loading = false;
      });

  }

  itemDeleted(item: TodoItem) {

    this.loading = true;
    this.todoItemsService.deleteItem(item)
      .then(() => {
        this.refreshTodoItems();
      })
      .catch(error => {
        this.loading = false;
      })

  }

  refreshTodoItems() {

    this.loading = true;
    this.todoItemsService.getTodoItems()
      .then(items => {
        this.todoItems = items;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
      });

  }

  ngOnInit(): void {

  }

}
