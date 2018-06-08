import { ChannelMeta } from "../meta";
import { storeMeta, register } from "../core";

export function Channel(channel: string): ClassDecorator {
  console.log(`@Channel::invoked ${channel}`);
  return (target: Function): any => {
    const meta = ChannelMeta.of(target.prototype).with({
      channel
    });
    storeMeta(meta);
    console.log(`@Channel[${channel}]::storeMeta`, meta);
    const wrapper = class awesome_websocket_wrapper extends (<FunctionConstructor> target) {
      constructor(...args: any[]) {
        super(...args);
        console.log(`awesome_websocket_wrapper[${target.name}]::new `, args, this);
        register(this);
      }
    }
    return wrapper;
  }
}
