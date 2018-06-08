import { Meta } from "../meta";

export const IOC_CONTAINER: Map<Function, any> = new Map();
export const METADATA: Map<Function, Meta[]> = new Map();

export function storeMeta(meta: Meta): void {
  console.log(`storingMeta`, meta);
  if (METADATA.has(meta.target)) {
    METADATA.set(meta.target, [...METADATA.get(meta.target), meta]);
  } else {
    METADATA.set(meta.target, [meta]);
  }
}

export function register(component: any): void {
  if(typeof component === 'function') {
    IOC_CONTAINER.set(<FunctionConstructor>component, new component());
  } else if(typeof component === 'object') {
    IOC_CONTAINER.set(Object.getPrototypeOf(component).__proto__, component);
  }
}