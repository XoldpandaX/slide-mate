import { FC, JSX } from 'react';
import { Theme } from '@/lib/types/theme';
import { cn } from '@/lib/utils/cn';
import { IconName } from '@/lib/ui-kit/app-icon/app-icon';
import { AppButtonIcon } from '@/lib/ui-kit';

import styles from './sidebar-theme-button.module.scss';

type ThemeIcon = Extract<IconName, 'Flash' | 'Moon'>;
interface ButtonThemeProps {
  theme: Theme;
  onClick: () => void;
}

const SidebarThemeButton: FC<ButtonThemeProps> = (props): JSX.Element => {
  const { theme, onClick: handleClick } = props;

  const buttonTitle = `Switch between dark and light mode (currently ${theme} mode)`;
  const rootClasses = cn(
    styles.sidebarThemeButton,
    theme === 'dark' ? styles.sidebarThemeButtonThemeDark : styles.sidebarThemeButtonThemeLight
  );

  return (
    <AppButtonIcon
      className={rootClasses}
      icon={getIconNameByTheme(theme)}
      title={buttonTitle}
      onClick={handleClick}
    />
  );
};

function getIconNameByTheme(theme: Theme): ThemeIcon {
  const icon: Record<Theme, ThemeIcon> = {
    dark: 'Flash',
    light: 'Moon',
  };

  return icon[theme];
}

export default SidebarThemeButton;
