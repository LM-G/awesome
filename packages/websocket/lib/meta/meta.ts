export enum MetaType {
  WS,
  ON
}

export interface Meta {
  readonly type: MetaType;
  target: Function;
}
