import { SendMeta } from "../meta";
import { storeMeta } from "../core";

export function Send(event: string): MethodDecorator {
  return <T>(target: Function, methodName: string, descriptor: TypedPropertyDescriptor<T>): void => {
    const meta = SendMeta.of(target).with({
      methodName,
      event
    })
    storeMeta(meta);
  }
}