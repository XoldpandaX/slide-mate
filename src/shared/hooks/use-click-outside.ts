import { useRef, useEffect, RefObject } from 'react';

interface IUseClickOutside<RefElement extends HTMLElement | SVGSVGElement> {
  onClickOutside: () => void;
  ref?: RefObject<RefElement>;
  elOutside?: HTMLElement;
}

export const useClickOutside = <RefElement extends HTMLElement | SVGSVGElement>(
  opts: IUseClickOutside<RefElement>
): RefObject<RefElement> => {
  const ref = opts.ref ?? useRef<RefElement>(null);
  const subEl = opts.elOutside ?? document;

  useEffect(() => {
    const handleClick = (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        opts.onClickOutside();
      }
    };

    subEl.addEventListener('click', handleClick, true);

    return (): void => {
      subEl.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};
