export interface IDraggableLastEvent {
  width: number;
  height: number;
  top: number;
  left: number;
  dist: [translateX: number, translateY: number];
}

export interface IDraggableCommonSnapshot {
  width: number;
  height: number;
  translateX: number;
  translateY: number;
}

export interface ISvgSnapshot extends IDraggableCommonSnapshot {
  fill: string;
}
