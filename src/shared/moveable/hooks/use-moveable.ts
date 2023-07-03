import { useRef, useState, RefObject } from 'react';
import { OnDragStart, OnDragEnd, OnRender } from 'react-moveable';
import { IFigure } from '@/shared/types/figure';
import { cn } from '@/shared/utils/cn';
import { createFigure } from '@/shared/moveable';
import { useClickOutside } from '@/shared/hooks/use-click-outside';
import { map, split, compose, equals } from '@/shared/utils/fn';

import styles from '@/shared/moveable/figure/figure.module.scss';

type Ref = HTMLElement | SVGSVGElement;

interface UseMoveable<RefElement extends Ref> {
  moveableRef: RefObject<RefElement>;
  moveableInitStyles: { width: string; height: string; transform: string };
  moveableCssClasses: string;
  wrapperCssClasses: string;
  handleDragStart: () => void;
  handleDragEnd: (e: OnDragStart | OnDragEnd, onFigureUpdate: (figure: IFigure) => void) => void;
  handleRender: (e: OnRender) => void;
  changeSelectionState: (state: boolean) => void;
}

const useDraggable = <RefElement extends Ref>(
  initFigure: IFigure,
  refClickOutside: RefObject<Ref>
): UseMoveable<RefElement> => {
  const elRef = useRef<RefElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isDragRender, setIsDragRender] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [figure, setFigure] = useState(initFigure);

  // TODO: when layout appears click outside should be from layout el
  useClickOutside({
    onClickOutside: () => {
      changeSelectionState(false);
    },
    ref: refClickOutside,
  });

  const moveableCssClasses = cn(!isSelected && styles.moveableWrapper__moveable);
  const wrapperCssClasses = cn(
    styles.moveableWrapper,
    isDrag && isDragRender && styles.hideMoveableControl,
    !isSelected && styles.hideMoveableControlBox
  );

  const moveableInitStyles = {
    transform: `translate(${initFigure.left}px, ${initFigure.top}px)`,
    width: `${initFigure.width}px`,
    height: `${initFigure.height}px`,
  };

  const handleDragStart = (): void => {
    setIsDrag(true);
  };

  const handleDragEnd = (
    e: OnDragStart | OnDragEnd,
    onFigureUpdate: (figure: IFigure) => void
  ): void => {
    const { target } = e;
    const [x, y] = getTargetTransformValue(e.target);
    const updatedFigure = createFigure({
      width: target.clientWidth,
      height: target.clientHeight,
      top: y,
      left: x,
      fill: 'red',
    });

    setIsDrag(false);
    setIsDragRender(false);

    if (!equals(updatedFigure, figure)) {
      onFigureUpdate(updatedFigure);
      setFigure(updatedFigure);
    }

    if (!isSelected) {
      setSelected(true);
    }
  };

  const changeSelectionState = (state: boolean): void => {
    /**
     * The timeout below is needed when a moveable
     * starts dragging immediately after selection
     */
    setTimeout(() => {
      if (!isDragRender) setSelected(state);
    }, 75);
  };

  const handleRender = (e: OnRender): void => {
    if (isDrag && !isDragRender) setIsDragRender(true);
    e.target.style.cssText += e.cssText;
  };

  return {
    moveableRef: elRef,
    moveableInitStyles,
    wrapperCssClasses,
    moveableCssClasses,
    handleDragStart,
    handleDragEnd,
    handleRender,
    changeSelectionState,
  };
};

function getTargetTransformValue(target: HTMLElement | SVGElement): [x: number, y: number] {
  const leaveOnlyNumbers = (str: string): number => Number(str.replace(/\D/g, ''));
  const [x, y] = compose(map(leaveOnlyNumbers), split(','))(target.style.transform);

  return [x, y];
}

export default useDraggable;
