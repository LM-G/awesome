import { OnMeta } from "../meta";
import { storeMeta } from "../core";

export function On(event: string): MethodDecorator {
  console.log(`@On::invoked ${event}`);
  return <T>(target: Function, methodName: string, descriptor: TypedPropertyDescriptor<T>): void => {
    const meta = OnMeta.of(target).with({
      methodName,
      event
    })
    storeMeta(meta);
    console.log(`@On[${event}]::storeMeta`, meta);
  }
}