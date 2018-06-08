import { Meta, MetaType } from "./meta";

export interface ChannelMetaOption {
  channel: string;
}

export class ChannelMeta implements Meta{
  readonly type = MetaType.WS;
  target: Function;
  channel: string;
  
  constructor(target: Function){
    this.target = target;
  }

  static of(target: Function):  ChannelMeta{
    return new ChannelMeta(target);
  }

  with({channel}: ChannelMetaOption): ChannelMeta{
    this.channel = channel;
    return this;
  }
}