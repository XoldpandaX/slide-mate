import { Suspense, FC } from 'react';
import { flushSync } from 'react-dom';
import { OnDragEnd, OnRender } from 'react-moveable';
import { IFigure } from '@/shared/types/figure';
import { getFigureSvgByName } from '@/shared/components/figure/get-figure-svg-by-name';
import { useClickOutside } from '@/shared/hooks/use-click-outside';
import Moveable from '../moveable';
import useMoveable from '../hooks/use-moveable';

export interface IFigureProps {
  type: 'square';
  data: IFigure;
}

export const Figure: FC<IFigureProps> = ({ data }) => {
  const SvgFigure = getFigureSvgByName('square');
  const { moveableElRef, toggleDragState, changeSelectedState, rootClasses } =
    useMoveable<SVGSVGElement>();

  useClickOutside({
    onClickOutside: () => {
      changeSelectedState(false);
    },
    ref: moveableElRef,
  });

  return (
    <div className={rootClasses}>
      <Suspense fallback={<div>loading</div>}>
        <SvgFigure
          ref={moveableElRef}
          fill={data.fill}
          style={{ transform: 'translate(146px, 65px)', width: '204px', height: '149px' }}
          onClick={(e) => {
            console.info(e);
          }}
          onMouseDown={() => {
            console.info('down');
            changeSelectedState(true);
          }}
        />
        <Moveable
          target={moveableElRef}
          flushSync={flushSync}
          draggable={true}
          // rotatable={true}
          preventClickDefault={true}
          resizable={true}
          // edgeDraggable={true}
          // rotatable={true}
          // hideDefaultLines={true}
          origin={false}
          throttleResize={1}
          throttleDrag={1}
          startDragRotate={0}
          throttleDragRotate={0}
          onRender={(e: OnRender): void => {
            console.info(e);
            e.target.style.cssText += e.cssText;
          }}
          onDragStart={(e): void => {
            console.info('onDragStart');
            toggleDragState();
          }}
          onDragEnd={(e: OnDragEnd): void => {
            console.info(e.moveable.getRect());
            console.info('onDragEnd');
            toggleDragState();
          }}
        />
      </Suspense>
    </div>
  );
};
