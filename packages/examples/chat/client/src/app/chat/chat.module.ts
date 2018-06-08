import { NgModule } from '@angular/core';
import { ChatStore } from 'src/app/chat';
import { ChatWebsocket } from './chat.api';

@NgModule({
  declarations: [
  ],
  imports: [

  ],
  providers: [ChatStore, ChatWebsocket]
})
export class ChatModule {
  constructor(private chatWs: ChatWebsocket) {
  }
}
