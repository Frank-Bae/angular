import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string[];

  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
    this.message = this.messageService.message;
  }

}
