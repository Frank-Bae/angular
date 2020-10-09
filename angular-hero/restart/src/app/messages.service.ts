import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string[] = [];

  constructor() { }

  add(msg): void {
    this.message.push(msg);
  }

  clear(): void {
    this.message = [];
  }
}
