import { IOC_CONTAINER, METADATA } from './metadata-container';
import { MetaType, Meta, OnMeta, ChannelMeta } from "../meta";

interface SocketData {
  channel: string;
  action: string;
  payload: string;
}



export function setUpWebsocketBehavior(websocket: WebSocket): void {
  console.log('Awesome', websocket);

  const channelMapping = getChannelsMapping();

  websocket.onmessage = onMessageHandler(channelMapping);
}

function getChannelsMapping(): Map<string, Function> {
  const result: Map<string, Function> = new Map();
  METADATA.forEach((metalist: Meta[], prototype: Function) => {
    const channelMeta: ChannelMeta = metalist.find(meta => meta.type === MetaType.WS) as ChannelMeta;
    result.set(channelMeta.channel, prototype);
  });
  return result;
}

function onMessageHandler(channelMapping: Map<string, Function>) {
  return (event: MessageEvent) => {
    const socketData = JSON.parse(event.data) as SocketData;
    const prototype = channelMapping.get(socketData.channel);

    console.log('Data reçue :', socketData);

    if (prototype) {
      const onMeta = METADATA.get(prototype)
        .filter(meta => meta.type === MetaType.ON)
        .find((meta: OnMeta) => meta.event === socketData.action) as OnMeta;
      if (onMeta) {
        invoke(prototype, onMeta.methodName, socketData.payload);
      }
    }
  }
}

function invoke(prototype: Function, methodName: string, payload: any) {
  const instance = IOC_CONTAINER.get(prototype);
  instance[methodName].call(instance, payload);
}


