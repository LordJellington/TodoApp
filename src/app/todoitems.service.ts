import { Injectable } from '@angular/core';
import { ErrorhandlerService } from './errorhandler.service';
import { TodoItem } from './interfaces';
import { IoService } from './io.service';

@Injectable({
  providedIn: 'root'
})
export class TodoitemsService {

  constructor(
    private io: IoService, 
    private errorHandlerService: ErrorhandlerService
  ) { 
    this.getTodoItems();
  }

  todoItems: TodoItem[] = [];
  loading: boolean = false;

  getTodoItems(): void {
    this.loading = true;
    this.io.get("api/TodoItems")
      .then(items => {
        this.todoItems = items;
        this.loading = false;
      }, this.raiseError)
      .catch(this.raiseError);
  }

  addNewItem(newItem: TodoItem): void {
    this.loading = true;
    this.io.post("api/TodoItems", newItem)
      .then(() => {
        this.getTodoItems();
      }, this.raiseError)
      .catch(this.raiseError);
  }

  updateItem(item: TodoItem): void {
    this.loading = true;
    this.io.put('api/TodoItems/' + item.id, item)
      .then(() => {
        this.getTodoItems();
      }, this.raiseError)
      .catch(this.raiseError);
  }

  deleteItem(item: TodoItem): void {
    this.loading = true;
    this.io.delete('api/TodoItems/' + item.id)
      .then(() => {
        this.getTodoItems();
      }, this.raiseError)
      .catch(this.raiseError);
  }

  private raiseError(error: Error): void {
    this.errorHandlerService.add(error);
  }

}
