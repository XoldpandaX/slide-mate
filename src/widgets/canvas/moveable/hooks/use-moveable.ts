import { useRef, useState, RefObject } from 'react';
import { OnDragStart, OnDragEnd, OnRender } from 'react-moveable';
import { IFigure } from '@/lib/types/figure';
import { cn } from '@/lib/utils/cn';
import { createFigure } from '@/widgets/canvas/moveable';
import { useClickOutside } from '@/lib/hooks/use-click-outside';
import { getNumbers } from '@/lib/utils/get-numbers';
import { map, split, compose, equals } from '@/lib/utils/fn';

import styles from '@/lib/moveable/figure/figure.module.scss';

type Ref = HTMLElement | SVGSVGElement;

// transform: translate(X, Y)
// transform: translate(456px, 406px); width: 37px; height: 39px;

const minWidth = 10;
const minHeight = 10;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getCssText = () => {
  let translateOld: [x: number, y: number];

  const fn = (translate: [x: number, y: number], width: number, height: number): string => {
    const [x, y] = translate;
    const w = width <= minWidth ? minWidth : width;
    const h = height <= minHeight ? minHeight : height;

    console.info(translateOld, 'translateOld');
    if (h !== minHeight) translateOld = translate;

    return `transform:  translate(${x}px, ${
      height <= minHeight ? translateOld[1] : y
    }px) ;width: ${w}px;height: ${h}px;`;
  };

  return fn;
};

const r = getCssText();

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

    // const minWidth = 10;
    // const minHeight = 10;

    // const getCssText = (
    //   translate: [x: number, y: number],
    //   width: number,
    //   height: number
    // ): string => {
    //   const [x, y] = translate;
    //   const w = width <= minWidth ? minWidth : width;
    //   const h = height <= minHeight ? minHeight : height;
    //
    //   return `transform:  translate(${x}px, ${y}px) ;width: ${w}px;height: ${h}px;`;
    // };

    if (!isDrag) {
      const { target } = e;
      const [xTransfrom, yTransform] = getTargetTransformValue(e.target);
      e.target.style.cssText += r(
        [xTransfrom, yTransform],
        target.clientWidth,
        target.clientHeight
      );
    } else {
      e.target.style.cssText += e.cssText;
    }
    // if (isDrag) // render without restrictions
    // else resizing
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
  const [x, y] = compose(map(getNumbers), split(','))(target.style.transform);
  return [x, y];
}

export default useDraggable;
