import { FC, JSX } from 'react';
import { AppSidebar, AppFlex } from '@/lib/ui-kit';
import { Theme } from '@/lib/types/theme';
import SidebarThemeButton from '../sidebar-theme-button/sidebar-theme-button';

import styles from './sidebar.module.scss';

export interface SidebarProps {
  /**
   * Width of the widget
   */
  width: number;
  /**
   * Current theme of an application
   */
  theme: Theme;
  /**
   * Handling widget intent to change an application theme
   */
  onThemeChange: () => void;
}

const Sidebar: FC<SidebarProps> = (props): JSX.Element => {
  const { width: appSidebarWidth, theme, onThemeChange } = props;

  return (
    <AppSidebar width={appSidebarWidth}>
      <AppFlex
        className={styles.sidebarTop}
        justify="center"
      >
        hello world
      </AppFlex>
      <AppFlex
        className={styles.sidebarBottom}
        justify="end"
        align="center"
      >
        {/* TODO: Here should be a language switcher component instead of a raw div element */}
        <div>
          <b>en</b>
        </div>
        <SidebarThemeButton
          theme={theme}
          onClick={onThemeChange}
        />
      </AppFlex>
    </AppSidebar>
  );
};

export default Sidebar;
