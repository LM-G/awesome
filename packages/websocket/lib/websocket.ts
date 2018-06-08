import { setUpWebsocketBehavior } from './core';
export * from './decorator';

export class AwesomeWebsocket {

  static connect(url: string){
    const websocket = new WebSocket(`ws://${url}`);
    setUpWebsocketBehavior(websocket);
  }
}
