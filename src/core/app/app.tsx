import { type FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

import css from './app.module.scss';

export const App: FC = () => (
  <div className={css.app}>
    hello app
    <Outlet/>
    <Link to="/auth">Auth page</Link>
    <Link to="/editor">Editor page</Link>
  </div>
);
