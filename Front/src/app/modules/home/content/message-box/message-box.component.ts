import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
  @Input('message') message: any;
  @Input('currentUser') user: any;

  constructor() {}

  ngOnInit(): void {}
}
