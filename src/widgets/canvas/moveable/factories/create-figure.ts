import { Shape } from '@/lib/types/shape';
import data from './data';

export const createFigure = (figure?: Shape): Shape => figure ?? data.emptyFigure;
