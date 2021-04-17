import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  messages: string[] = [];

  add(error: Error) {
    this.messages.push(error.message);
  }

  clear() {
    this.messages = [];
  }

}
