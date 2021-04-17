import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces';

@Component({
  selector: 'app-todoitem-detail',
  templateUrl: './todoitem-detail.component.html',
  styleUrls: ['./todoitem-detail.component.css']
})
export class TodoitemDetailComponent implements OnInit {

  @Input() todoItem?: TodoItem;

  // https://www.tektutorialshub.com/angular/angular-pass-data-to-parent-component/
  @Output() itemUpdated: EventEmitter<TodoItem> = new EventEmitter();
  @Output() itemDeleted: EventEmitter<TodoItem> = new EventEmitter();

  editMode: boolean = false;

  editRecord() {
    this.editMode = true;
  }

  saveRecord() {
    this.editMode = false;
    this.itemUpdated.emit(this.todoItem);
  }

  deleteRecord() {
    this.itemDeleted.emit(this.todoItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
