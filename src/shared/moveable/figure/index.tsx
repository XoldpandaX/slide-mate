import { Suspense, type FC } from 'react';
import { type OnResize } from 'react-moveable';
import { getSvgByName } from '@/shared/moveable/figure/utils/get-svg-by-name';
import Moveable from '../moveable';
import useDraggable from '../hooks/use-draggable';

export const Figure: FC = () => {
  const SvgComponent = getSvgByName('square');
  const { draggableRef, getDraggableSnapShot, changeDraggablePosition } =
    useDraggable<SVGSVGElement>();

  const changeTargetPosition = (e: OnResize): void => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  };

  return (
    <div className="root">
      <div className="container">
        <Suspense fallback={<div> loading</div>}>
          <SvgComponent ref={draggableRef} />
          <Moveable
            target={draggableRef}
            draggable={true}
            resizable={true}
            edgeDraggable={true}
            throttleDrag={1}
            startDragRotate={0}
            throttleDragRotate={0}
            onDrag={changeDraggablePosition}
            onDragEnd={getDraggableSnapShot}
            onResize={changeTargetPosition}
            onResizeEnd={(e) => {
              console.info(e);
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};
