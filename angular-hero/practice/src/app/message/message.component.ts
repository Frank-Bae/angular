import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessagesService) { }

  message: Hero;

  ngOnInit(): void {
  }


}
