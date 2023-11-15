import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@/core/hooks/use-theme';

// import css from './app.module.scss';

export const App: FC = () => {
  const [{ cssClasses }] = useTheme();

  return (
    <div className={cssClasses}>
      <Outlet />
    </div>
  );
};
