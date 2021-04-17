import { Injectable } from '@angular/core';
import { TodoItem } from './interfaces';
import { IoService } from './io.service';

@Injectable({
  providedIn: 'root'
})
export class TodoitemsService {

  constructor(private io: IoService) { }

  getTodoItems(): Promise<TodoItem[]> {
    return this.io.get("api/TodoItems");
  }

  addNewItem(newItem: TodoItem): Promise<any> {
    return this.io.post("api/TodoItems", newItem);
  }

  updateItem(item: TodoItem): Promise<any> {
    return this.io.put('api/TodoItems/' + item.id, item);
  }

  deleteItem(item: TodoItem): Promise<any> {
    return this.io.delete('api/TodoItems/' + item.id);
  }

}
