import { FC, JSX } from 'react';

import css from './toolbar.module.scss';

export interface ToolbarProps {
  /**
   * Left indent for absolutely positioned widget
   */
  left: number;
}

const Toolbar: FC<ToolbarProps> = (): JSX.Element => {
  return <div className={css.toolbar}></div>;
};

export default Toolbar;
