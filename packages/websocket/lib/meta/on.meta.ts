import { Meta, MetaType } from "./meta";

export interface OnMetaOption {
  methodName: string;
  event: string;
}

export class OnMeta implements Meta{
  readonly type = MetaType.ON;
  target: Function;
  methodName: string;
  event: string;
  
  constructor(target: Function){
    this.target = target;
  }

  static of(target: Function):  OnMeta{
    return new OnMeta(target);
  }

  with({methodName, event}: OnMetaOption): OnMeta{
    this.methodName = methodName;
    this.event = event;
    return this;
  }
}