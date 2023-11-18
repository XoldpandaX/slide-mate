import { FC, JSX } from 'react';
import { Theme } from '@/lib/types/theme';
import { ToolbarProps, Toolbar } from '@/widgets/toolbar';
import { SidebarProps, Sidebar } from '@/widgets/sidebar';

import Constants from '../../constants';
import styles from './editor.module.scss';

export interface EditorProps {
  theme: Theme;
  themeColors: Record<Theme, string>;
  onThemeChange: () => void;
}

const Editor: FC<EditorProps> = (props): JSX.Element => {
  const { themeColors, theme, onThemeChange } = props;
  const rootStyles = { backgroundColor: themeColors[theme] };
  const sidebarProps: SidebarProps = { width: Constants.SIDEBAR_WIDTH, theme, onThemeChange };
  const toolbarProps: ToolbarProps = { left: Constants.TOOLBAR_LEFT_INDENT };

  return (
    <div
      style={rootStyles}
      className={styles.editor}
    >
      <Sidebar {...sidebarProps} />
      <Toolbar {...toolbarProps} />
    </div>
  );
};

export default Editor;
