import { useRef, useState, RefObject } from 'react';
import { OnDrag, OnDragEnd, OnResize } from 'react-moveable';
import { cn } from '@/shared/utils/cn';
import {
  IDraggableCommonSnapshot,
  IDraggableLastEvent,
  ISvgSnapshot,
} from '@/shared/moveable/types';

import styles from '@/shared/moveable/figure/figure.module.scss';

interface UseMoveable<RefElement extends HTMLElement | SVGSVGElement> {
  moveableElRef: RefObject<RefElement>;
  isDrag: boolean;
  isSelected: boolean;
  rootClasses: string;
  getSvgSnapShot: (cb: (data: ISvgSnapshot) => void) => (e: OnDragEnd) => void;
  changePosition: (e: OnDrag) => void;
  changeSize: (e: OnResize) => void;
  toggleDragState: () => void;
  changeSelectedState: (state: boolean) => void;
}

const useDraggable = <
  RefElement extends HTMLElement | SVGSVGElement
>(): UseMoveable<RefElement> => {
  const elRef = useRef<RefElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const toggleDragState = (): void => {
    setIsDrag((v) => !v);
  };

  const changeSelectedState = (state: boolean): void => {
    setSelected(state);
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
    moveableElRef: elRef,
    isDrag,
    isSelected,
    rootClasses: cn(
      styles.figure,
      isDrag && styles.hideMoveableControl,
      !isSelected && styles.hideMoveableControlBox
    ),
    getSvgSnapShot,
    changePosition,
    changeSize,
    toggleDragState,
    changeSelectedState,
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
