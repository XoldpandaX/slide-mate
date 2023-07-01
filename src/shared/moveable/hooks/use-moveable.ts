import { useRef, useState, RefObject } from 'react';
import { OnDrag, OnDragEnd, OnResize } from 'react-moveable';
import {
  IDraggableCommonSnapshot,
  IDraggableLastEvent,
  ISvgSnapshot,
} from '@/shared/moveable/types';

interface UseDraggable<RefElement> {
  moveableElRef: RefObject<RefElement>;
  isDrag: boolean;
  getSvgSnapShot: (cb: (data: ISvgSnapshot) => void) => (e: OnDragEnd) => void;
  changePosition: (e: OnDrag) => void;
  changeSize: (e: OnResize) => void;
  isMoveableDrag: boolean;
  changeDragState: () => void;
}

const useDraggable = <RefElement>(): UseDraggable<RefElement> => {
  const [isDrag, setIsDrag] = useState(false);
  const moveableElRef = useRef<RefElement>(null);

  const changeDragState = (): void => {
    setIsDrag((v) => !v);
  };

  const getSvgSnapShot =
    (cb: (data: ISvgSnapshot) => void) =>
    (e: OnDragEnd): void => {
      if (e.isDrag && e.target.nodeName === 'svg') {
        const commonSnapshot = getCommonSnapShot(e);
        const fillAttribute = e.target.attributes.getNamedItem('fill');
        const fill = fillAttribute ? fillAttribute.value : '#000000';

        cb({
          width: commonSnapshot.width,
          height: commonSnapshot.height,
          translateX: commonSnapshot.translateX,
          translateY: commonSnapshot.translateY,
          fill,
        });
      }
    };

  const changePosition = (e: OnDrag): void => {
    e.target.style.transform = e.transform;
  };

  const changeSize = (e: OnResize): void => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  };

  return {
    moveableElRef,
    isDrag,
    isMoveableDrag: isDrag,
    getSvgSnapShot,
    changePosition,
    changeSize,
    changeDragState,
  };
};

function getCommonSnapShot(e: OnDragEnd): IDraggableCommonSnapshot {
  const { width, height, dist } = e.lastEvent as IDraggableLastEvent;
  const [translateX, translateY] = dist;

  return {
    width,
    height,
    translateX,
    translateY,
  };
}

export default useDraggable;
