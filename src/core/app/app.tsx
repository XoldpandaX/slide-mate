import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import css from './app.module.scss';

export const App: FC = () => (
  <div className={css.app}>
    hello app
    <Outlet/>
  </div>
);
