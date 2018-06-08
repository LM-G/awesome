import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AwesomeWebsocket } from '@awesome/websocket';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,

    NgbModule.forRoot(),

    ChatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    AwesomeWebsocket.connect('localhost:4321');
  }
}
