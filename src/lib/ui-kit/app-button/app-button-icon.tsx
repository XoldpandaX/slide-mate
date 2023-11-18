import { ButtonHTMLAttributes, FC, JSX } from 'react';
import { cn } from '@/lib/utils/cn';
import AppIcon, { IconName } from '../app-icon/app-icon';

import styles from './app-button-icon.module.scss';

interface AppButtonIconPropsBase {
  icon: IconName;
  onClick: () => void;
}

export type AppButtonIconProps = AppButtonIconPropsBase &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'title'>;

const AppButtonIcon: FC<AppButtonIconProps> = (props): JSX.Element => {
  const { icon: iconName, className, ...buttonProps } = props;
  const rootClasses = cn(styles.appButtonIcon, className);

  return (
    <button
      type="button"
      className={rootClasses}
      {...buttonProps}
    >
      <AppIcon name={iconName} />
    </button>
  );
};

export default AppButtonIcon;
