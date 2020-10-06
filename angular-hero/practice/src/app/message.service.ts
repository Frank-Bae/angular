import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = [];

  constructor() { }

  add(msg: string): void {
    this.message.push(msg);
  }

  clear(): void {
    this.message = [];
  }
}
