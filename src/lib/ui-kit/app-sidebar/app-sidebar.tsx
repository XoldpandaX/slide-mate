import { FC, JSX, PropsWithChildren } from 'react';

import styles from './app-sidebar.module.scss';

export interface AppSidebarProps extends PropsWithChildren {
  width: number;
}

const AppSidebar: FC<AppSidebarProps> = (props): JSX.Element => {
  const { children, width } = props;

  return (
    <div
      style={{ width }}
      className={styles.appSidebar}
    >
      {children}
    </div>
  );
};

export default AppSidebar;
