import { lazy, type FC, type SVGProps, type LazyExoticComponent } from 'react';

type SvgName = 'square';
type SvgCmp = FC<SVGProps<SVGElement>>;

const svgByName: Record<SvgName, LazyExoticComponent<SvgCmp>> = {
  square: lazy<SvgCmp>(async () => await import('./svg/square.svg')),
};

export const getFigureSvgByName = (name: SvgName): LazyExoticComponent<SvgCmp> => svgByName[name];
