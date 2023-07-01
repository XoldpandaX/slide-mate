import { Suspense, useState, FC } from 'react';
import { flushSync } from 'react-dom';
import { OnRender } from 'react-moveable';
import { classNames } from '@/shared/utils/class-names';
import { getFigureSvgByName } from '@/shared/components/figure/get-figure-svg-by-name';
import Moveable from '../moveable';
import useMoveableHandlers from '../hooks/use-moveable-handlers';

import styles from './figure.module.scss';

export const Figure: FC = () => {
  const [isDrag, setDragStatus] = useState(false);

  const SvgFigure = getFigureSvgByName('square');
  const { moveableElRef, getSvgSnapShot } = useMoveableHandlers<SVGSVGElement>();

  const rootClasses = classNames([styles.figure, isDrag ? styles.hideMoveableControl : '']);

  const toggleDragStatus = (value: boolean): void => {
    setDragStatus((v) => !v);
  };

  return (
    <div className={rootClasses}>
      <Suspense fallback={<div>loading</div>}>
        <SvgFigure ref={moveableElRef} />
        <Moveable
          target={moveableElRef}
          flushSync={flushSync}
          draggable={true}
          scalable={true}
          // resizable={true}
          // edgeDraggable={true}
          // rotatable={true}
          // hideDefaultLines={true}
          origin={false}
          throttleDrag={0}
          startDragRotate={0}
          throttleDragRotate={0}
          onRender={(e: OnRender) => {
            console.info(e);
            e.target.style.cssText += e.cssText;
          }}
          onDragStart={(e) => {
            console.info(e);
            toggleDragStatus(true);
          }}
          onDragEnd={getSvgSnapShot((e) => {
            console.info('onDragEnd');
            toggleDragStatus(false);
          })}
        />
      </Suspense>
    </div>
  );
};
