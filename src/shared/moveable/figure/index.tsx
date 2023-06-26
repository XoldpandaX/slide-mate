import { type FC } from 'react';
import MoveAble, { type OnResize } from 'react-moveable';
import useDraggable from '../hooks/use-draggable';

export const Figure: FC = () => {
  const { draggableRef, getDraggableSnapShot, changeDraggablePosition } = useDraggable();

  const changeTargetPosition = (e: OnResize): void => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  };

  return (
    <div className="root">
      <div className="container">
        <div
          className="target"
          ref={draggableRef}
        >
          Target
        </div>
        <MoveAble
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
      </div>
    </div>
  );
};
