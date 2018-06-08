import { Channel, On, Send } from '@awesome/websocket';
import { ChatStore } from './chat.store';
import { Injectable } from '@angular/core';

@Injectable()
@Channel('chat')
export class ChatWebsocket {
  constructor(private chatStore: ChatStore) {
    console.log('Chat Websocket connected');
  }

  @On('message')
  private onMessage(message: string): void {
    console.log(`Message reçu: ${message}`);
    this.chatStore.addMessage(message);
  }

  @On('guest')
  private onGuest(guests: {name: string}[]): void {
    console.log(`guests:`, guests);
  }

  @Send('message')
  sendMessage(message: string): string {
    return message;
  }

  @Send('guest')
  getGuests(): void {}
}
