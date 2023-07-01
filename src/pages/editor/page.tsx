import { type FC } from 'react';
import { Figure } from '@/shared/moveable/figure/figure';
import { createFigure } from '@/shared/moveable';

const EditorPage: FC = () => (
  <Figure
    type="square"
    data={createFigure()}
  />
);

export default EditorPage;
