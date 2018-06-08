import { Send } from '@awesome/websocket';
import { ChatStore } from './chat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChatWebsocket } from './chat/chat.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messages: string[];
  chatForm: FormGroup;

  constructor(private chatStore: ChatStore, private fb: FormBuilder) {
    chatStore.message$.subscribe(messages => {
      this.messages = messages;
    });
  }

  ngOnInit(): void {
    console.log('# SignInComponent started');
    this.chatForm = this.fb.group({
      'message': ''
    });
  }

  send(): void {
    const {message} = this.chatForm.value;
    this.chatStore.sendMessage(message);
  }
}
