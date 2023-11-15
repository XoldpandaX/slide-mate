import { Suspense, FC, useRef } from 'react';
import { flushSync } from 'react-dom';
import { OnDragEnd, OnRender } from 'react-moveable';
import { IFigure } from '@/lib/types/figure';
import { getFigureSvgByName } from '../../components/figure/get-figure-svg-by-name';
import Moveable from '../moveable';
import useMoveable from '../hooks/use-moveable';

export interface IFigureProps {
  type: 'square';
  data: IFigure;
  onFigureUpdate: (figure: IFigure) => void;
}

export const Figure: FC<IFigureProps> = ({ data, onFigureUpdate }) => {
  const refRoot = useRef<HTMLDivElement>(null);
  const SvgFigure = getFigureSvgByName('square');
  const {
    moveableRef,
    moveableInitStyles,
    wrapperCssClasses,
    moveableCssClasses,
    handleDragStart,
    handleDragEnd,
    handleRender,
    changeSelectionState,
  } = useMoveable<SVGSVGElement>(data, refRoot);

  return (
    <div
      ref={refRoot}
      className={wrapperCssClasses}
    >
      <Suspense fallback={<div>loading</div>}>
        <SvgFigure
          ref={moveableRef}
          className={moveableCssClasses}
          fill={data.fill}
          style={moveableInitStyles}
          onMouseDown={() => {
            changeSelectionState(true);
          }}
        />
        <Moveable
          target={moveableRef}
          flushSync={flushSync}
          edge={['w', 'e', 's', 'n']}
          draggable={true}
          useAccuratePosition={true}
          preventClickDefault={true}
          resizable={true}
          origin={false}
          throttleResize={1}
          throttleDrag={1}
          startDragRotate={0}
          throttleDragRotate={0}
          onDragStart={(): void => {
            handleDragStart();
          }}
          onDragEnd={(e: OnDragEnd): void => {
            handleDragEnd(e, onFigureUpdate);
          }}
          onRender={(e: OnRender): void => {
            handleRender(e);
          }}
        />
      </Suspense>
    </div>
  );
};
