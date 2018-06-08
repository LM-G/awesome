import { Meta, MetaType } from "./meta";

export interface SendMetaOption {
  methodName: string;
  event: string;
}

export class SendMeta implements Meta{
  readonly type = MetaType.ON;
  target: Function;
  methodName: string;
  event: string;
  
  constructor(target: Function){
    this.target = target;
  }

  static of(target: Function):  SendMeta{
    return new SendMeta(target);
  }

  with({methodName, event}: SendMetaOption): SendMeta{
    this.methodName = methodName;
    this.event = event;
    return this;
  }
}