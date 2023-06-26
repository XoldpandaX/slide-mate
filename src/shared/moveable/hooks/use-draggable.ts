import { useRef, type RefObject } from 'react';
import { type OnDrag, type OnDragEnd } from 'react-moveable';

interface UseDraggable {
  draggableRef: RefObject<HTMLDivElement>;
  getDraggableSnapShot: (e: OnDragEnd) => void;
  changeDraggablePosition: (e: OnDrag) => void;
}

const useDraggable = (): UseDraggable => {
  const draggableRef = useRef<HTMLDivElement>(null);

  const getDraggableSnapShot = (e: OnDragEnd): void => {
    const { width, height, dist } = e.lastEvent;
    const [xTranslate, yTranslate] = dist;

    console.info('width', width);
    console.info('height', height);
    console.info('xTranslate', xTranslate);
    console.info('yTranslate', yTranslate);
  };

  const changeDraggablePosition = (e: OnDrag): void => {
    e.target.style.transform = e.transform;
  };

  return {
    draggableRef,
    getDraggableSnapShot,
    changeDraggablePosition,
  };
};

export default useDraggable;
