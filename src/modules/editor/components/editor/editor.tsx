import { FC, JSX } from 'react';
import { ToolbarProps, Toolbar } from '@/widgets/toolbar';
import { SidebarProps, Sidebar } from '@/widgets/sidebar';
import Constants from '../../constants';

export interface EditorProps extends Pick<SidebarProps, 'theme' | 'onThemeChange'> {}

const Editor: FC<EditorProps> = (props): JSX.Element => {
  const { theme, onThemeChange } = props;
  const sidebarProps: SidebarProps = { width: Constants.SIDEBAR_WIDTH, theme, onThemeChange };
  const toolbarProps: ToolbarProps = { left: Constants.TOOLBAR_LEFT_INDENT };

  return (
    <div>
      <Sidebar {...sidebarProps} />
      <Toolbar {...toolbarProps} />
    </div>
  );
};

export default Editor;
