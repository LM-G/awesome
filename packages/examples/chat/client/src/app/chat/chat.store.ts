import { ChatWebsocket } from './chat.api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChatStore {
  message$: BehaviorSubject<string[]>;

  constructor() {
    this.message$ = new BehaviorSubject([]);
  }

  // ACTION ADD_MESSAGE
  addMessage(message: string) {
    this.message$.next([...this.message$.getValue(), message]);
  }

  // ACTION SEND_MESSAGE
  sendMessage(message: string): void {
    // no-op
  }
}

export class ChatReactions {
  constructor(private chatWebsocket: ChatWebsocket) { }

  sendMessage(action: any): void {
    this.chatWebsocket.sendMessage(action.payload);
  }
}
