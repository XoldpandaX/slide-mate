import { HTMLAttributes, FC, JSX, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/cn';

import styles from './app-sidebar.module.scss';

export interface AppSidebarProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  width: number;
  left?: number;
  lighter?: boolean;
}

const AppSidebar: FC<AppSidebarProps> = (props): JSX.Element => {
  const { children, className, width, left = 0, lighter = false } = props;
  const rootClasses = cn(
    styles.appSidebar,
    lighter ? styles.appSidebarLighter : styles.appSidebarDarker,
    className
  );

  return (
    <div
      style={{ width, left }}
      className={rootClasses}
    >
      {children}
    </div>
  );
};

export default AppSidebar;
