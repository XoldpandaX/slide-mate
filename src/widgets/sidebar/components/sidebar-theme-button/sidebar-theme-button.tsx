import { FC, JSX } from 'react';
import { Theme } from '@/lib/types/theme';
import { cn } from '@/lib/utils/cn';
import { AppButton, AppIcon } from '@/lib/ui-kit';

import styles from './sidebar-theme-button.module.scss';

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
    <AppButton
      className={rootClasses}
      title={buttonTitle}
      // fill
      minimal
      onClick={handleClick}
    >
      {getIconByTheme(theme)}
    </AppButton>
  );
};

function getIconByTheme(theme: Theme): JSX.Element {
  const icon: Record<Theme, JSX.Element> = {
    dark: <AppIcon name="Flash" />,
    light: <AppIcon name="Moon" />,
  };

  return icon[theme];
}

export default SidebarThemeButton;
