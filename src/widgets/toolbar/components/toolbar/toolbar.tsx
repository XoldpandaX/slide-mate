import { FC, JSX } from 'react';
import { AppSidebar, AppSidebarProps, AppFlex } from '@/lib/ui-kit';

import styles from './toolbar.module.scss';

export interface ToolbarProps {
  /**
   * Left indent for absolutely positioned widget
   */
  left: number;
}

const Toolbar: FC<ToolbarProps> = (props): JSX.Element => {
  const { left } = props;
  const appSidebarProps: AppSidebarProps = {
    className: styles.toolbar,
    left,
    width: 170,
    lighter: true,
  };

  return (
    <AppSidebar {...appSidebarProps}>
      <AppFlex
        justify="center"
        align="center"
        className={styles.toolbarTop}
      >
        top
      </AppFlex>
      <AppFlex
        justify="center"
        align="center"
        className={styles.toolbarBottom}
      >
        bottom
      </AppFlex>
    </AppSidebar>
  );
};

export default Toolbar;
