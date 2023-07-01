import { IFigure } from '@/shared/types/figure';
import data from './data';

export const createFigure = (figure?: IFigure): IFigure => figure ?? data.emptyFigure;
