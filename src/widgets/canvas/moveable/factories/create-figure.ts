import { IFigure } from '@/lib/types/figure';
import data from './data';

export const createFigure = (figure?: IFigure): IFigure => figure ?? data.emptyFigure;
